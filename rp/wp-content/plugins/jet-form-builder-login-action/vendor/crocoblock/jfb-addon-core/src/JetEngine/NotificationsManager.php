<?php


namespace JetLoginCore\JetEngine;

abstract class NotificationsManager {

	use WithInit;

	public $notifications = array();

	/**
	 * @return array
	 */
	abstract public function register_notification();

	public function plugin_version_compare() {
		return '2.8.1';
	}

	public function on_plugin_init() {
		add_action( 'init', array( $this, 'setup_notifications' ) );

		add_filter(
			'jet-engine/forms/booking/notification-types',
			array( $this, 'register_notifications' )
		);
		add_action(
			'jet-engine/forms/editor/before-assets',
			array( $this, 'register_assets_before' )
		);
		add_action(
			'jet-engine/forms/editor/assets',
			array( $this, 'register_assets' )
		);
	}

	public function register_assets() {
	}

	public function register_assets_before() {
	}

	public function setup_notifications() {
		$types = $this->register_notification();

		foreach ( $types as $type ) {
			$this->notifications[ $type->get_id() ] = $type;

			add_action(
				'jet-engine/forms/booking/notifications/fields-after',
				array( $type, 'notification_fields' )
			);

			add_action(
				'jet-engine/forms/booking/notification/' . $type->get_id(),
				array( $type, 'do_action' ), 10, 2
			);
		}
	}


	/**
	 * Register new notification type
	 *
	 * @param $notifications
	 *
	 * @return mixed [type] [description]
	 */
	public function register_notifications( $notifications ) {
		foreach ( $this->notifications as $type ) {
			$notifications[ $type->get_id() ] = $type->get_name();
		}

		return $notifications;
	}

}