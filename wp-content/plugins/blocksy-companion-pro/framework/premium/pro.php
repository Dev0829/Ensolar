<?php

namespace Blocksy;

class Premium {
	public $content_blocks = null;
	public $premium_header = null;
	public $premium_footer = null;

	public $dark_mode = null;

	public function __construct() {
		require BLOCKSY_PATH . '/framework/premium/helpers/helpers.php';
		require BLOCKSY_PATH . '/framework/premium/helpers/content-blocks.php';

		$this->content_blocks = new ContentBlocks();
		$this->premium_header = new PremiumHeader();
		$this->premium_footer = new PremiumFooter();
		$this->dark_mode = new DarkMode();

		new CaptchaToolsIntegration();
		new MediaMetaTools();

		$this->plugin_update();

		register_block_type(
			'blocksy-companion-pro/code-editor',
			[
				'api_version' => 3,
				'render_callback' => function ($attributes, $content) {
					if (is_admin()) {
						return '';
					}

					if (! empty($content)) {
						$inline_code = str_replace(
							'<pre class="wp-block-code"><code>',
							'',
							str_replace(
								'</code></pre>',
								'',
								html_entity_decode(htmlspecialchars_decode($content))
							)
						);

						$ending = '<?php ';

						if (strpos($inline_code, '<?php') !== false) {
							if (strpos($inline_code, '?>') === false) {
								$ending = '';
							}
						}

						ob_start();
						eval('?' . '>' . $inline_code . $ending);
						return ob_get_clean();
					}

					if (empty($attributes['code'])) {
						return '';
					}

					$inline_code = $attributes['code'];

					$ending = '<?php ';

					if (strpos($inline_code, '<?php') !== false) {
						if (strpos($inline_code, '?>') === false) {
							$ending = '';
						}
					}

					ob_start();
					eval('?' . '>' . $inline_code . $ending);
					$result = ob_get_clean();

					return $result;
				}
			]
		);

		add_filter(
			'plugin_row_meta',
			function ($plugin_meta, $plugin_file, $plugin_data, $status) {
				if (! isset($plugin_data['slug'])) {
					return $plugin_meta;
				}

				if ($plugin_data['slug'] === 'blocksy-companion') {
					unset($plugin_meta[2]);
				}

				return $plugin_meta;
			},
			10,4
		);

		add_filter('blocksy_extensions_paths', function ($p) {
			$p[] = BLOCKSY_PATH . 'framework/premium/extensions';
			return $p;
		});

		add_action(
			'customize_preview_init',
			function () {
				if (! function_exists('get_plugin_data')) {
					require_once(ABSPATH . 'wp-admin/includes/plugin.php');
				}

				$data = get_plugin_data(BLOCKSY__FILE__);

				wp_enqueue_script(
					'blocksy-pro-customizer',
					BLOCKSY_URL . 'framework/premium/static/bundle/sync.js',
					['ct-customizer'],
					$data['Version'],
					true
				);
			}
		);

		add_action(
			'admin_enqueue_scripts',
			function () {
				if (! function_exists('get_plugin_data')) {
					require_once(ABSPATH . 'wp-admin/includes/plugin.php');
				}

				global $wp_customize;

				$data = get_plugin_data(BLOCKSY__FILE__);

				$deps = ['ct-options-scripts'];

				$current_screen = get_current_screen();

				if ($current_screen && $current_screen->id === 'customize') {
					$deps = ['ct-customizer-controls'];
				}

				wp_enqueue_script(
					'blocksy-premium-admin-scripts',
					BLOCKSY_URL . 'framework/premium/static/bundle/options.js',
					$deps,
					$data['Version'],
					true
				);

				$hooks_manager = new HooksManager();
				$conditions_manager = new ConditionsManager();

				$localize = array_merge(
					[
						'all_condition_rules' => $conditions_manager->get_all_rules(),
						'singular_condition_rules' => $conditions_manager->get_all_rules([
							'filter' => 'singular'
						]),
						'archive_condition_rules' => $conditions_manager->get_all_rules([
							'filter' => 'archive'
						]),
						'all_hooks' => $hooks_manager->get_all_hooks(),
						'ajax_url' => admin_url('admin-ajax.php'),
						'rest_url' => get_rest_url(),
					],
					$this->content_blocks->get_admin_localizations(),
					$this->premium_footer->get_admin_localizations()
				);

				wp_localize_script(
					'blocksy-premium-admin-scripts',
					'blocksy_premium_admin',
					$localize
				);

				wp_enqueue_style(
					'blocksy-premium-styles',
					BLOCKSY_URL . 'framework/premium/static/bundle/options.min.css',
					[],
					$data['Version']
				);
			},
			50
		);

		add_action('wp_enqueue_scripts', function () {
			if (! function_exists('get_plugin_data')) {
				require_once(ABSPATH . 'wp-admin/includes/plugin.php');
			}

			if (! isset($_GET['blocksy_preview_hooks'])) {
				return;
			}

			$data = get_plugin_data(BLOCKSY__FILE__);

			wp_enqueue_script(
				'blocksy-pro-scripts',
				BLOCKSY_URL . 'framework/premium/static/bundle/frontend.js',
				['ct-scripts'],
				$data['Version'],
				true
			);
		});

		add_action(
			'wp_ajax_blocksy_toggle_has_beta_consent',
			function () {
				if (! current_user_can('edit_theme_options')) {
					wp_send_json_error();
				}

				$future_value_bool = Plugin::instance()->premium->user_wants_beta_updates();

				$future_value = $future_value_bool ? 'no' : 'yes';
				update_option('blocksy_has_beta_updates', $future_value);

				$reflector = new \ReflectionObject(blc_fs());

				$get_api_site_scope = $reflector->getMethod('get_api_site_scope');
				$get_api_site_scope->setAccessible(true);

				$site = $get_api_site_scope->invoke(blc_fs())->call(
					'',
					'put',
					[
						'is_beta' => ! $future_value_bool,
						'fields' => 'is_beta'
					]
				);

				$_site = $reflector->getProperty('_site');
				$_site->setAccessible(true);

				$_site->getValue(blc_fs())->is_beta = $site->is_beta;

				$_store_site = $reflector->getMethod('_store_site');
				$_store_site->setAccessible(true);
				$_store_site->invoke(blc_fs());

				wp_send_json_success([]);
			}
		);

		add_action(
			'admin_enqueue_scripts',
			function () {
				if (! function_exists('blocksy_is_dashboard_page')) return;
				if (! blocksy_is_dashboard_page()) return;

				$data = get_plugin_data(BLOCKSY__FILE__);

				$deps = apply_filters('blocksy-dashboard-scripts-dependencies', [
					'wp-i18n',
					'ct-events',
					'ct-options-scripts'
				]);

				wp_enqueue_script(
					'blocksy-dashboard-pro-scripts',
					BLOCKSY_URL . 'framework/premium/static/bundle/dashboard.js',
					$deps,
					$data['Version'],
					false
				);
			},
			100
		);
	}

	public function user_wants_beta_updates() {
		$option_value = get_option('blocksy_has_beta_updates', 'no');

		return $option_value === 'yes';
	}

	public function plugin_update() {
		$has_beta = $this->user_wants_beta_updates();

		if (! $has_beta) {
			return;
		}

		add_action(
			'after_setup_theme',
			function () {
				$theme = wp_get_theme(get_template());

				$updater = new \EDD_Theme_Updater_Admin(
					// Config settings
					$config = array(
						'remote_api_url' => 'https://creativethemes.com/',
						'item_name' => 'Blocksy',
						'theme_slug' => 'blocksy',
						'version' => $theme->get('Version'),
						'author' => 'CreativeThemes',
						'download_id' => '599',
						'renew_url' => ''
					),

					// Strings
					$strings = array(
						'theme-license' => __( 'Theme License', 'edd-theme-updater' ),
						'enter-key' => __( 'Enter your theme license key.', 'edd-theme-updater' ),
						'license-key' => __( 'License Key', 'edd-theme-updater' ),
						'license-action' => __( 'License Action', 'edd-theme-updater' ),
						'deactivate-license' => __( 'Deactivate License', 'edd-theme-updater' ),
						'activate-license' => __( 'Activate License', 'edd-theme-updater' ),
						'status-unknown' => __( 'License status is unknown.', 'edd-theme-updater' ),
						'renew' => __( 'Renew?', 'edd-theme-updater' ),
						'unlimited' => __( 'unlimited', 'edd-theme-updater' ),
						'license-key-is-active' => __( 'License key is active.', 'edd-theme-updater' ),
						'expires%s' => __( 'Expires %s.', 'edd-theme-updater' ),
						'%1$s/%2$-sites' => __( 'You have %1$s / %2$s sites activated.', 'edd-theme-updater' ),
						'license-key-expired-%s' => __( 'License key expired %s.', 'edd-theme-updater' ),
						'license-key-expired' => __( 'License key has expired.', 'edd-theme-updater' ),
						'license-keys-do-not-match' => __( 'License keys do not match.', 'edd-theme-updater' ),
						'license-is-inactive' => __( 'License is inactive.', 'edd-theme-updater' ),
						'license-key-is-disabled' => __( 'License key is disabled.', 'edd-theme-updater' ),
						'site-is-inactive' => __( 'Site is inactive.', 'edd-theme-updater' ),
						'license-status-unknown' => __( 'License status is unknown.', 'edd-theme-updater' ),
						'update-notice' => __( "Updating this theme will lose any customizations you have made. 'Cancel' to stop, 'OK' to update.", 'edd-theme-updater' ),
						'update-available' => __('<strong>%1$s %2$s</strong> is available. <a href="%3$s" class="thickbox" title="%4s">Check out what\'s new</a> or <a href="%5$s"%6$s>update now</a>.', 'edd-theme-updater' )
					)

				);
			}
		);

	}
}
