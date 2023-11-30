<?php


namespace JetLoginCore\JetEngine;


use JetLoginCore\Exceptions\BaseHandlerException;
use JetLoginCore\SmartNotificationActionTrait;

abstract class SmartBaseNotification extends BaseNotification {

	use SmartNotificationActionTrait;

	public function setRequest( $key, $value ) {
		$this->getInstance()->data[ $key ]               = $value;
		$this->getInstance()->handler->form_data[ $key ] = $value;

		return $this;
	}

	public function hasGateway() {
		return $this->getInstance()->handler->has_gateway();
	}

	public function getFormId() {
		return $this->getInstance()->form;
	}

	public function isAjax() {
		return $this->getInstance()->handler->is_ajax;
	}

	protected function getSettingsWithGlobal() {
		$settings = $this->getSettings();

		if ( empty( $settings ) ) {
			throw new BaseHandlerException( 'failed' );
		}

		return $this->getInstance()->get_settings_with_global(
			$settings, $this->getGlobalOptionName()
		);
	}

	/**
	 * @inheritDoc
	 */
	public function do_action( array $settings, $notifications ) {
		try {
			$this->_requestData = $notifications->data;
			$this->_instance    = $notifications;
			$this->_settings    = isset( $settings[ $this->get_id() ] )
				? $settings[ $this->get_id() ]
				: array();

			$this->run_action();

			$notifications->log[] = true;

		} catch ( BaseHandlerException $exception ) {
			return $notifications->set_specific_status( $exception->getMessage() );
		}
	}
}