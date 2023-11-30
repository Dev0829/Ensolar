<?php


namespace Jet_FB_Login;


use JetLoginCore\Exceptions\BaseHandlerException;

/**
 * @method setRequest( $key, $value )
 * @method getSettings( $key = '' )
 * @method hasGateway()
 * @method getRequest( $key = '', $ifNotExist = false )
 * @method issetRequest( $key )
 * @method dynamicError( $message, ...$additional )
 *
 * Trait ActionTrait
 * @package Jet_FB_Login
 */
trait ActionTrait {

	public function get_id() {
		return 'login';
	}

	public function get_name() {
		return __( 'User Login', 'jet-form-builder-login-action' );
	}

	/**
	 * @throws BaseHandlerException
	 */
	public function run_action() {
		if ( ! $this->getSettings( 'user_login_field' ) || ! $this->getSettings( 'user_pass_field' ) ) {
			$this->dynamicError( 'Please enter your login and password.' );
		}

		$credentials   = $this->get_credentials();
		$secure_cookie = (bool) $this->getSettings( 'secure_cookie' );

		$user = wp_signon( $credentials, $secure_cookie );

		if ( $user instanceof \WP_Error ) {
			$this->dynamicError( $user->get_error_message() );
		}
	}

	public function get_credentials() {
		$fields        = array(
			'user_login'    => 'user_login_field',
			'user_password' => 'user_pass_field',
			'remember'      => 'remember_field'
		);
		$fields_values = array();

		foreach ( $fields as $name => $settings_name ) {
			$field = $this->getSettings( $settings_name );

			if ( ! $this->issetRequest( $field ) ) {
				continue;
			}
			$fields_values[ $name ] = $this->getRequest( $field );
		}

		return $fields_values;
	}

}