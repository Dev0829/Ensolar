<?php

namespace CBChangeMailSender\Helpers;

/** \WP_Upgrader_Skin class */
require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader-skin.php';

/**
 * Class PluginSilentUpgraderSkin.
 *
 * @internal Please do not use this class outside of core Change Mail Sender development. May be removed at any time.
 *
 * @since 1.3.0
 */
class PluginSilentUpgraderSkin extends \WP_Upgrader_Skin {

	/**
	 * Empty out the header of its HTML content and only check to see if it has
	 * been performed or not.
	 *
	 * @since 1.3.0
	 */
	public function header() {}

	/**
	 * Empty out the footer of its HTML contents.
	 *
	 * @since 1.3.0
	 */
	public function footer() {}

	/**
	 * Instead of outputting HTML for errors, just return them.
	 * Ajax request will just ignore it.
	 *
	 * @param array $errors Array of errors with the install process.
	 *
	 * @since 1.3.0
	 *
	 * @return array
	 */
	public function error($errors) {

		return $errors;
	}

	/**
	 * Empty out JavaScript output that calls function to decrement the update counts.
	 *
	 * @since 1.3.0
	 *
	 * @param string $type Type of update count to decrement.
	 */
	public function decrement_update_count( $type ) {}
}

