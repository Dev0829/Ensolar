<?php

namespace Jet_FB_Login;


use Jet_FB_Login\JetEngine\Notifications\Manager as JEManager;
use Jet_FB_Login\JetFormBuilder\Actions\Manager as JFBManager;

if ( ! defined( 'WPINC' ) ) {
	die();
}

class Plugin {
	/**
	 * Instance.
	 *
	 * Holds the plugin instance.
	 *
	 * @since 1.0.0
	 * @access public
	 * @static
	 *
	 * @var Plugin
	 */
	public static $instance = null;


	public $slug = 'jet-form-builder-login-action';

	public function __construct() {
		JFBManager::register();
		JEManager::register();

		$can_init_license = (
			is_admin()
			&& function_exists( 'jet_form_builder' )
			&& array_key_exists( 'addons_manager', get_object_vars( jet_form_builder() ) )
		);

		if ( $can_init_license ) {
			require $this->plugin_dir( 'includes/class-jfb-license-manager.php' );

			new \JFB_License_Manager();
		}
	}

	public function get_version() {
		return JET_FB_LOGIN_ACTION_VERSION;
	}

	public function plugin_url( $path ) {
		return JET_FB_LOGIN_ACTION_URL . $path;
	}

	public function plugin_dir( $path = '' ) {
		return JET_FB_LOGIN_ACTION_PATH . $path;
	}

	public function get_template_path( $template ) {
		$path = JET_FB_LOGIN_ACTION_PATH . 'templates' . DIRECTORY_SEPARATOR;

		return ( $path . $template . '.php' );
	}


	/**
	 * Instance.
	 *
	 * Ensures only one instance of the plugin class is loaded or can be loaded.
	 *
	 * @return Plugin An instance of the class.
	 * @since 1.0.0
	 * @access public
	 * @static
	 *
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

}

Plugin::instance();