<?php
if (!defined('ABSPATH')) die('No direct access allowed');

if (!class_exists('MPSUM_Anonymize_Updates')) {

	/**
	 * Class to anonymize update requests send to wp.org
	 */
	class MPSUM_Anonymize_Updates {

		/**
		 * Adds and removes necessary action and filter hooks to anonymize
		 */
		private function __construct() {
			add_action('eum_advanced_headings', array($this, 'heading'), 14);
			add_action('eum_advanced_settings', array($this, 'settings'), 14);
			$this->choose_update_request_method();
		}

		/**
		 * Returns a singleton instance
		 *
		 * @return MPSUM_Anonymize_Updates
		 */
		public static function get_instance() {
			static $instance = null;
			if (null === $instance) {
				$instance = new self();
			}
			return $instance;
		}

		/**
		 * Chooses update request method between full, anonymize and random
		 */
		private function choose_update_request_method() {
			$options = MPSUM_Updates_Manager::get_options('advanced');
			if (!isset($options['anonymize_updates']) || 'default' == $options['anonymize_updates']) return;
			if ('anonymous' == $options['anonymize_updates']) {
				add_filter('core_version_check_query_args', array($this, 'remove_non_essential_data'));
				add_filter('http_request_args', array($this, 'anonymize_http_headers_useragent'), 10, 2);
			}
			if ('random' == $options['anonymize_updates']) {
				MPSUM_Randomize_Updates::get_instance();
			}
		}

		/**
		 * Outputs feature heading
		 */
		public function heading() {
			printf('<div data-menu_name="anonymize-updates">%s <span class="eum-advanced-menu-text">%s</span></div>', '<i class="material-icons">cloud_off</i>', esc_html__('Anonymize updates', 'stops-core-theme-and-plugin-updates'));
		}

		/**
		 * Outputs feature settings
		 */
		public function settings() {
			Easy_Updates_Manager()->include_template('anonymize-updates.php');
		}

		/**
		 * Anonymize non essential data sent to wordpress.org in query arguments
		 *
		 * @param array $query An array of query arguments
		 *
		 * @return array Modified array of query arguments
		 */
		public function remove_non_essential_data($query) {
			$non_essential_query_args = apply_filters('eum_non_essential_query_args', array(
				'local_package',
				'blogs',
				'users',
				'multisite_enabled',
				'initial_db_version',
			));
			foreach ($non_essential_query_args as $arg) {
				unset($query[$arg]);
			}
			return $query;
		}

		/**
		 * Anonymize HTTP Header User Agent which is sent to wp.org
		 *
		 * @param array  $args An array of arguments
		 * @param string $url  URL
		 *
		 * @return array Anonymized headers
		 */
		public function anonymize_http_headers_useragent($args, $url) {
			if (MPSUM_Utils::is_wp_api($url)) {
				$args['user-agent'] ='WordPress';
				$args['headers'] = array();
			}
			return $args;
		}
	}
}
