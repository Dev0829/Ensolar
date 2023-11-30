<?php
if (!defined('ABSPATH')) die('No direct access allowed');

if (!class_exists('MPSUM_Randomize_Updates')) {

	/**
	 * Class to anonymize update requests send to wp.org
	 */
	class MPSUM_Randomize_Updates {

		/**
		 * Adds and removes necessary action and filter hooks to anonymize
		 */
		private function __construct() {
			add_filter('core_version_check_query_args', array($this, 'randomize_non_essential_data'));
			add_filter('http_request_args', array($this, 'randomize_http_headers_useragent'), 10, 2);
		}

		/**
		 * Returns a singleton instance
		 *
		 * @return MPSUM_Randomize_Updates
		 */
		public static function get_instance() {
			static $instance = null;
			if (null === $instance) {
				$instance = new self();
			}
			return $instance;
		}

		/**
		 * Randomizes non essential data sent to wordpress.org in query arguments
		 *
		 * @param array $query An array of query arguments
		 *
		 * @return array Modified array of query arguments
		 */
		public function randomize_non_essential_data($query) {
			$random_non_essential_query_args = apply_filters('eum_random_non_essential_query_args', array(
				'local_package' => '',
				'blogs' => 1,
				'users' => 1,
				'multisite_enabled' => '0',
				'initial_db_version' => '1.0.0'
			));
			foreach ($random_non_essential_query_args as $key => $value) {
				$query[$key] = $value;
			}
			return $query;
		}

		/**
		 * Randomize HTTP Header User Agent which is sent to wp.org
		 *
		 * @param array  $args An array of arguments
		 * @param string $url  URL
		 *
		 * @return array Randomized headers
		 */
		public function randomize_http_headers_useragent($args, $url) {
			if (MPSUM_Utils::is_wp_api($url)) {
				$random_port_number = rand(80, 9999);
				$args['user-agent'] ='WordPress; http://localhost:' . $random_port_number . '/';
				$args['headers'] = array(
					'wp_install' => 'http://localhost:' . $random_port_number . '/',
					'wp_blog' => 'http://localhost:' . $random_port_number . '/'
				);
			}
			return $args;
		}
	}
}
