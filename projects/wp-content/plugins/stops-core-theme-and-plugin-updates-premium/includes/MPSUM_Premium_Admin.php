<?php
if (!defined('ABSPATH')) die('No direct access.');

if (class_exists('MPSUM_Premium_Admin')) return;

/**
 * Class MPSUM_Premium_Admin to handle admin section of premium features
 */
class MPSUM_Premium_Admin {

	/**
	 * MPSUM_Premium_Admin constructor. Adds necessary hooks
	 */
	private function __construct() {
		add_action('admin_enqueue_scripts', array($this, 'enqueue_scripts_styles'));
		add_action('eum_premium_ajax_handler', array(MPSUM_Premium_Admin_Ajax::get_instance(), 'ajax_handler'), 10, 2);
	}

	/**
	 * Returns a singleton instance
	 *
	 * @return MPSUM_Premium_Admin
	 */
	public static function get_instance() {
		static $instance = null;
		if (null === $instance) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Enqueues necessary scripts and stylesheets
	 */
	public function enqueue_scripts_styles() {
		$pagenow = isset($_GET['page']) ? $_GET['page'] : false;

		if ('mpsum-update-options' !== $pagenow) return;

		$min_or_not = (defined('SCRIPT_DEBUG') && SCRIPT_DEBUG) ? '' : '.min';
		wp_enqueue_script('mpsum-modernizr-js', MPSUM_Updates_Manager::get_plugin_url('/js/modernizr/modernizr-custom' . $min_or_not . '.js'), array(), EASY_UPDATES_MANAGER_VERSION, true);
		wp_enqueue_script('mpsum-premium-js', MPSUM_Updates_Manager::get_plugin_url('/js/eum-premium-admin' . $min_or_not . '.js'), array(), EASY_UPDATES_MANAGER_VERSION, true);
		wp_enqueue_script('mpsum-timepicker-js', MPSUM_Updates_Manager::get_plugin_url('/js/jquery-timepicker/jquery.timepicker' . $min_or_not . '.js'), array('jquery'), EASY_UPDATES_MANAGER_VERSION, true);
		wp_enqueue_style('mpsum-timepicker-css', MPSUM_Updates_Manager::get_plugin_url('/js/jquery-timepicker/jquery.timepicker' . $min_or_not . '.css'), array(), EASY_UPDATES_MANAGER_VERSION);
		wp_enqueue_style('mpsum-premium-css', MPSUM_Updates_Manager::get_plugin_url('/css/style-premium' . $min_or_not . '.css'), array(), EASY_UPDATES_MANAGER_VERSION);

		if (isset($_GET['tab']) && 'logs' === $_GET['tab']) {
			wp_enqueue_script('mpsum-datepicker-js', MPSUM_Updates_Manager::get_plugin_url('/js/eum-logs-datepicker-init' . $min_or_not . '.js'), array('jquery', 'jquery-ui-datepicker'), EASY_UPDATES_MANAGER_VERSION, true);
			wp_enqueue_style('jquery-ui', MPSUM_Updates_Manager::get_plugin_url('/css/jquery-ui' . $min_or_not . '.css'), EASY_UPDATES_MANAGER_VERSION);
		}
	}
}
