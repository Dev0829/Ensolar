<?php


namespace JetLoginCore\JetFormBuilder;


use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Form_Messages\Manager;
use Jet_Form_Builder\Gateways\Gateway_Manager;
use JetLoginCore\Exceptions\BaseHandlerException;
use JetLoginCore\SmartNotificationActionTrait;

abstract class SmartBaseAction extends Base {

	use SmartNotificationActionTrait;

	public function setRequest( $key, $value ) {
		$this->getInstance()->request_data[ $key ] = $value;

		return $this;
	}

	public function hasGateway() {
		return Gateway_Manager::instance()->has_gateway( $this->getInstance()->form_id );
	}

	public function getFormId() {
		return $this->getInstance()->form_id;
	}

	public function isAjax() {
		return $this->getInstance()->request_data['__is_ajax'];
	}

	protected function getGlobalSettingsKeys() {
		return array();
	}

	protected function getSettingsWithGlobal() {
		return array_merge(
			$this->getSettings(),
			$this->global_settings( $this->getGlobalSettingsKeys() )
		);
	}

	public function parseDynamicException( $type, $message ): string {
		switch ( $type ) {
			case 'error':
				return Manager::dynamic_error( $message );
			case 'success':
				return Manager::dynamic_success( $message );
			default:
				return $message;
		}
	}

	/**
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @return mixed|void
	 * @throws Action_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		try {
			$this->_requestData = $request;
			$this->_instance    = $handler;
			$this->_settings    = $this->settings;
			$this->option_name  = $this->getGlobalOptionName();

			$this->run_action();

		} catch ( BaseHandlerException $exception ) {
			throw new Action_Exception(
				$this->parseDynamicException(
					$exception->type(),
					$exception->getMessage()
				),
				...$exception->getAdditional()
			);
		}
	}

	protected function applyFilters( $suffix, ...$params ) {
		return apply_filters(
			"jet-form-builder/action/{$this->get_id()}/{$suffix}",
			...$params
		);
	}

}