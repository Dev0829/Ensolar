<?php

/**
 * License key fun.
 *
 * @since 1.0.0
 */
class WPCode_License {

	/**
	 * Store any license error messages.
	 *
	 * @since 1.0.0
	 *
	 * @var array
	 */
	public $errors = array();

	/**
	 * Store any license success messages.
	 *
	 * @since 1.0.0
	 *
	 * @var array
	 */
	public $success = array();

	/**
	 * The base URL for the license API.
	 *
	 * @var string
	 */
	public static $base_url = 'https://licensing.wpcode.com/v1/';

	/**
	 * Primary class constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {

		// Admin notices.
		if ( ! isset( $_GET['page'] ) || $_GET['page'] !== 'wpcode-settings' ) { // phpcs:ignore WordPress.Security.NonceVerification, WordPress.Security.ValidatedSanitizedInput
			add_action( 'admin_init', array( $this, 'notices' ) );
		}

		// Periodic background license check.
		if ( $this->get() ) {
			$this->maybe_validate_key();
		}
	}

	/**
	 * Get the URL to check licenses.
	 *
	 * @return string The URL.
	 */
	public static function get_url() {
		if ( defined( 'WPCODE_LICENSING_URL' ) ) {
			return WPCODE_LICENSING_URL;
		}

		return self::$base_url;
	}

	/**
	 * Retrieve the license key.
	 *
	 * @return string
	 * @since 1.0.0
	 */
	public function get() {

		// Check for license key.
		$key = $this->get_setting( 'key', '' );

		// Allow wp-config constant to pass key.
		if ( empty( $key ) && defined( 'WPCODE_LICENSE_KEY' ) ) {
			$key = WPCODE_LICENSE_KEY;
		}

		return $key;
	}

	/**
	 * Grab a value from the license setting directly by its key.
	 *
	 * @param string $key The key to grab the value for.
	 * @param mixed  $default The default value.
	 *
	 * @return array|false|mixed|string
	 */
	public function get_setting( $key, $default = false ) {
		$key     = sanitize_key( $key );
		$options = get_option( 'wpcode_license', false );

		return is_array( $options ) && ! empty( $options[ $key ] ) ? wp_unslash( $options[ $key ] ) : $default;
	}

	/**
	 * Check how license key is provided.
	 *
	 * @return string
	 * @since 1.6.3
	 */
	public function get_key_location() {

		if ( defined( 'WPCODE_LICENSE_KEY' ) ) {
			return 'constant';
		}

		$key = $this->get_setting( 'key', '' );

		return ! empty( $key ) ? 'option' : 'missing';
	}

	/**
	 * Load the license key level.
	 *
	 * @return string
	 * @since 1.0.0
	 */
	public function type() {

		return $this->get_setting( 'type', '' );
	}

	/**
	 * Get domains for license requests.
	 *
	 * @return array[]
	 */
	public function get_domains() {
		$path = wp_parse_url( get_home_url(), PHP_URL_PATH );

		$path = $path ? trailingslashit( $path ) : '/';

		return array(
			array(
				'domain' => wpcode_get_site_domain(),
				'path'   => $path,
			),
		);
	}

	/**
	 * Verify a license key entered by the user.
	 *
	 * @param string $key License key.
	 * @param bool   $ajax True if this is an ajax request.
	 *
	 * @return bool
	 * @since 1.0.0
	 */
	public function verify_key( $key = '', $ajax = false ) {

		if ( empty( $key ) ) {
			return false;
		}

		// Perform a request to verify the key.
		$verify = $this->perform_remote_request( 'activate', $key, $this->get_domains() );

		// If the verification request returns false, send back a generic error message and return.
		if ( empty( $verify ) ) {
			$msg = esc_html__( 'There was an error connecting to the remote key API. Please try again later.', 'wpcode-premium' );

			if ( $ajax ) {
				wp_send_json_error( $msg );
			} else {
				$this->errors[] = $msg;

				return false;
			}
		}

		// If an error is returned, set the error and return.
		if ( ! empty( $verify->error ) ) {
			if ( $ajax ) {
				wp_send_json_error( $verify->error );
			} else {
				$this->errors[] = $verify->error;

				return false;
			}
		}

		$success = __( 'Congratulations! Your WPCode license is activated & this site is now receiving automatic updates.', 'wpcode-premium' );

		// Otherwise, user's license has been verified successfully, update the option and set the success message.
		$option                = (array) get_option( 'wpcode_license', array() );
		$option['key']         = $key;
		$option['type']        = isset( $verify->level ) ? $verify->level : $option['type'];
		$option['is_expired']  = false;
		$option['is_disabled'] = false;
		$option['is_invalid']  = false;
		$option['addons']      = isset( $verify->addons ) ? $verify->addons : array();
		$this->success[]       = $success;

		update_option( 'wpcode_license', $option );

		$this->clear_cache();

		if ( $ajax ) {
			wp_send_json_success(
				array(
					'type' => $option['type'],
					'msg'  => $success,
				)
			);
		}
	}

	/**
	 * Clear license cache routine.
	 *
	 * @since 1.6.8
	 */
	private function clear_cache() {
		wp_clean_plugins_cache();
	}

	/**
	 * Maybe validates a license key entered by the user.
	 *
	 * @return void Return early if the transient has not expired yet.
	 * @since 1.0.0
	 */
	public function maybe_validate_key() {

		$key = $this->get();

		if ( ! $key ) {
			return;
		}

		// Perform a request to validate the key once a day.
		$timestamp = get_option( 'wpcode_license_updates' );

		if ( ! $timestamp ) {
			$timestamp = strtotime( '+24 hours' );
			update_option( 'wpcode_license_updates', $timestamp );
			$this->validate_key( $key );
		} else {
			$current_timestamp = time();
			if ( $current_timestamp < $timestamp ) {
				return;
			} else {
				update_option( 'wpcode_license_updates', strtotime( '+24 hours' ) );
				$this->validate_key( $key );
			}
		}
	}

	/**
	 * Validate a license key entered by the user.
	 *
	 * @param string $key Key.
	 * @param bool   $forced Force to set contextual messages (false by default).
	 * @param bool   $ajax AJAX.
	 * @param bool   $return_status Option to return the license status.
	 *
	 * @return string|bool
	 * @since 1.0.0
	 */
	public function validate_key( $key = '', $forced = false, $ajax = false, $return_status = false ) { // phpcs:ignore Generic.Metrics.CyclomaticComplexity.MaxExceeded

		$validate = $this->perform_remote_request( 'activate', $key, $this->get_domains() );

		// If there was a basic API error in validation, only set the transient for 10 minutes before retrying.
		if ( empty( $validate ) ) {
			// If forced, set contextual success message.
			if ( $forced ) {
				$msg = esc_html__( 'There was an error connecting to the remote key API. Please try again later.', 'wpcode-premium' );
				if ( $ajax ) {
					wp_send_json_error( $msg );
				} else {
					$this->errors[] = $msg;
				}
			}

			return false;
		}

		$option = (array) get_option( 'wpcode_license' );

		if ( ! empty( $validate->error ) ) {
			if ( 'missing-license' === $validate->error ) {
				$option['is_expired']  = false;
				$option['is_disabled'] = false;
				$option['is_invalid']  = true;
				update_option( 'wpcode_license', $option );

				return false;
			}

			if ( 'disabled' === $validate->error ) {
				$option['is_expired']  = false;
				$option['is_disabled'] = true;
				$option['is_invalid']  = false;
				update_option( 'wpcode_license', $option );

				return false;
			}

			if ( 'expired' === $validate->error ) {
				$option['is_expired']  = true;
				$option['is_disabled'] = false;
				$option['is_invalid']  = false;
				update_option( 'wpcode_license', $option );

				return false;
			}
		}

		// Something bad happened, error unknown.
		if ( empty( $validate->success ) || empty( $validate->level ) ) {
			return false;
		}

		// Otherwise, our check has returned successfully. Set the transient and update our license type and flags.
		$option['type']        = isset( $validate->level ) ? $validate->level : $option['type'];
		$option['is_expired']  = false;
		$option['is_disabled'] = false;
		$option['is_invalid']  = false;
		$option['addons']      = isset( $validate->addons ) ? $validate->addons : array();

		update_option( 'wpcode_license', $option );

		return $return_status ? 'valid' : true;
	}

	/**
	 * Deactivate a license key entered by the user.
	 *
	 * @param bool $ajax True if this is an ajax request.
	 * @param bool $force Force deactivate (delete license regardless of the response).
	 *
	 * @since 1.0.0
	 */
	public function deactivate_key( $ajax = false, $force = false ) {

		$key = $this->get();

		if ( ! $key ) {
			return;
		}

		// Perform a request to deactivate the key.
		$deactivate = $this->perform_remote_request( 'deactivate', $key, $this->get_domains() );

		// If the deactivation request returns false, send back a generic error message and return.
		if ( ! $deactivate && ! $force ) {

			$msg = esc_html__( 'There was an error connecting to the remote key API. Please try again later.', 'wpcode-premium' );

			if ( $ajax ) {
				wp_send_json_error( $msg );
			} else {
				$this->errors[] = $msg;

				return;
			}
		}

		// If an error is returned, set the error and return.
		if ( ! empty( $deactivate->error ) && ! $force ) {
			if ( $ajax ) {
				wp_send_json_error( $deactivate->error );
			} else {
				$this->errors[] = $deactivate->error;

				return;
			}
		}

		// Otherwise, user's license has been deactivated successfully, reset the option and set the success message.
		$success         = esc_html__( 'You have deactivated the key from this site successfully.', 'wpcode-premium' );
		$this->success[] = $success;

		update_option( 'wpcode_license', '' );

		$this->clear_cache();

		if ( $ajax ) {
			wp_send_json_success( $success );
		}
	}

	/**
	 * Return possible license key error flag.
	 *
	 * @return bool True if there are license key errors, false otherwise.
	 * @since 1.0.0
	 */
	public function get_errors() {

		$option = get_option( 'wpcode_license' );

		return ! empty( $option['is_expired'] ) || ! empty( $option['is_disabled'] ) || ! empty( $option['is_invalid'] );
	}

	/**
	 * Output any notices generated by the class.
	 *
	 * @param bool $below_h2 Whether to display a notice below H2.
	 *
	 * @since 1.0.0
	 */
	public function notices( $below_h2 = false ) {

		// Grab the option and output any nag dealing with license keys.
		$key    = $this->get();
		$option = get_option( 'wpcode_license' );
		$class  = $below_h2 ? 'below-h2 ' : '';
		$class  .= 'wpcode-license-notice';

		// If there is no license key, output nag about ensuring key is set for automatic updates.
		if ( ! $key ) {
			$notice = sprintf(
				wp_kses( /* translators: %s - plugin settings page URL. */
					__( 'Please <a href="%s">enter and activate</a> your license key for WPCode to enable automatic updates.', 'wpcode-premium' ),
					array(
						'a' => array(
							'href' => array(),
						),
					)
				),
				esc_url( add_query_arg( array( 'page' => 'wpcode-settings' ), admin_url( 'admin.php' ) ) )
			);

			WPCode_Notice::info(
				$notice,
				array( 'class' => $class )
			);
		}

		// If a key has expired, output nag about renewing the key.
		if ( isset( $option['is_expired'] ) && $option['is_expired'] ) :

			$renew_now_url  = add_query_arg(
				array(
					'utm_source'   => 'WordPress',
					'utm_medium'   => 'Admin Notice',
					'utm_campaign' => 'plugin',
					'utm_content'  => 'Renew Now',
				),
				'https://library.wpcode.com/account/licenses/'
			);
			$learn_more_url = add_query_arg(
				array(
					'utm_source'   => 'WordPress',
					'utm_medium'   => 'Admin Notice',
					'utm_campaign' => 'plugin',
					'utm_content'  => 'Learn More',
				),
				'https://wpcode.com/docs/how-to-renew-your-wpcode-license/'
			);

			$notice = sprintf(
				'<h3 style="margin: .75em 0 0 0;">
					%1$s %2$s
				</h3>
				<p>%3$s</p>
				<p>
					<a href="%4$s" class="button-primary">%5$s</a> &nbsp
					<a href="%6$s" class="button-secondary">%7$s</a>
				</p>',
				get_wpcode_icon( 'exclamation' ),
				esc_html__( 'Heads up! Your WPCode license has expired.', 'wpcode-premium' ),
				esc_html__( 'An active license is needed to create new snippets and edit existing snippets. It also provides access to new features & plugin updates (including security improvements), and our world class support!', 'wpcode-premium' ),
				esc_url( $renew_now_url ),
				esc_html__( 'Renew Now', 'wpcode-premium' ),
				esc_url( $learn_more_url ),
				esc_html__( 'Learn More', 'wpcode-premium' )
			);

			WPCode_Notice::error(
				$notice,
				array(
					'class' => $class,
					'autop' => false,
				)
			);
		endif;

		// If a key has been disabled, output nag about using another key.
		if ( isset( $option['is_disabled'] ) && $option['is_disabled'] ) {
			WPCode_Notice::error(
				esc_html__( 'Your license key for WPCode has been disabled. Please use a different key to continue receiving automatic updates.', 'wpcode-premium' ),
				array( 'class' => $class )
			);
		}

		// If a key is invalid, output nag about using another key.
		if ( isset( $option['is_invalid'] ) && $option['is_invalid'] ) {
			WPCode_Notice::error(
				esc_html__( 'Your license key for WPCode is invalid. The key no longer exists or the user associated with the key has been deleted. Please use a different key to continue receiving automatic updates.', 'wpcode-premium' ),
				array( 'class' => $class )
			);
		}

		// If there are any license errors, output them now.
		if ( ! empty( $this->errors ) ) {
			WPCode_Notice::error(
				implode( '<br>', $this->errors ),
				array( 'class' => $class )
			);
		}

		// If there are any success messages, output them now.
		if ( ! empty( $this->success ) ) {
			WPCode_Notice::info(
				implode( '<br>', $this->success ),
				array( 'class' => $class )
			);
		}
	}

	/**
	 * Request the remote URL via wp_remote_get() and return a json decoded response.
	 *
	 * @param string $action The name of the request action var.
	 * @param string $license_key The license key to send with the request.
	 * @param array  $domains Array of domains to check license against.
	 *
	 * @return mixed Json decoded response on success, false on failure.
	 * @since 1.7.2 Switch from POST to GET request.
	 *
	 * @since 1.0.0
	 */
	public function perform_remote_request( $action, $license_key, $domains ) {

		$payload = array(
			'version'     => WPCODE_VERSION,
			'license'     => $license_key,
			'domains'     => $domains,
			'php_version' => PHP_VERSION,
			'wp_version'  => get_bloginfo( 'version' ),
		);

		return self::api_request( $action, $payload );
	}

	/**
	 * Generic request method for the licensing API.
	 *
	 * @param string $endpoint The api endpoint to request.
	 * @param array  $body The body data to send with the request.
	 * @param array  $headers The headers to use for this request.
	 *
	 * @return false|mixed
	 */
	public static function api_request( $endpoint, $body = array(), $headers = array() ) {
		$body = wp_json_encode( $body );

		// Build the headers of the request.
		$headers = wp_parse_args(
			$headers,
			array(
				'Content-Type' => 'application/json',
			)
		);

		$request_args = array(
			'headers' => $headers,
			'body'    => $body,
			'timeout' => 20,
		);

		$url = trailingslashit( self::get_url() . $endpoint );

		$response = wp_remote_post( $url, $request_args );

		$response_code = wp_remote_retrieve_response_code( $response );
		$response_body = wp_remote_retrieve_body( $response );

		// Bail out early if there are any errors.
		if ( (int) $response_code > 299 || is_wp_error( $response_body ) ) {
			return false;
		}

		// Return the json decoded content.
		return json_decode( $response_body );
	}

	/**
	 * Whether the site is using an active license.
	 *
	 * @return bool
	 * @since 1.5.0
	 */
	public function is_active() {

		$license = get_option( 'wpcode_license', false );

		if (
			empty( $license ) ||
			! empty( $license['is_expired'] ) ||
			! empty( $license['is_disabled'] ) ||
			! empty( $license['is_invalid'] )
		) {
			return false;
		}

		return true;
	}

	/**
	 * Whether the site is using an expired license.
	 *
	 * @return bool
	 * @since 1.7.2
	 */
	public function is_expired() {

		return $this->has_status( 'is_expired' );
	}

	/**
	 * Whether the site is using a disabled license.
	 *
	 * @return bool
	 * @since 1.7.2
	 */
	public function is_disabled() {

		return $this->has_status( 'is_disabled' );
	}

	/**
	 * Whether the site is using an invalid license.
	 *
	 * @return bool
	 * @since 1.7.2
	 */
	public function is_invalid() {

		return $this->has_status( 'is_invalid' );
	}

	/**
	 * Check whether there is a specific license status.
	 *
	 * @param string $status License status.
	 *
	 * @return bool
	 * @since 1.7.2
	 */
	private function has_status( $status ) {

		$license = get_option( 'wpcode_license', false );

		return ( isset( $license[ $status ] ) && $license[ $status ] );
	}

	public function is_addon_allowed( $sku ) {
		$addons = $this->get_setting( 'addons', array() );

		if ( is_string( $addons ) ) {
			$addons = json_decode( $addons );
		}

		if ( empty( $addons ) ) {
			return false;
		}

		return in_array( $sku, $addons, true );
	}
}
