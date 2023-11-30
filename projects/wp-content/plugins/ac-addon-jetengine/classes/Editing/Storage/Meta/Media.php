<?php

namespace ACA\JetEngine\Editing\Storage\Meta;

use AC\MetaType;
use ACA\JetEngine\Field\ValueFormat;
use ACA\JetEngine\Mapping\MediaId;
use ACP;

class Media extends ACP\Editing\Storage\Meta {

	/**
	 * @var string
	 */
	private $value_format;

	public function __construct( $meta_key, MetaType $meta_type, $value_format ) {
		parent::__construct( $meta_key, $meta_type );

		$this->value_format = (string) $value_format;
	}

	public function get( $id ) {
		$value = parent::get( $id );

		if ( empty( $value ) ) {
			return false;
		}

		switch ( $this->value_format ) {
			case ValueFormat::FORMAT_URL:
				$value = MediaId::from_array( $value );

				break;
			case ValueFormat::FORMAT_BOTH:
				$value = MediaId::from_array( $value );

				break;
		}

		return $value ?: false;
	}

	public function update( $id, $value ) {
		if ( empty( $value ) ) {
			return parent::update( $id, $value );
		}

		switch ( $this->value_format ) {
			case ValueFormat::FORMAT_URL:
				$value = MediaId::to_url( $value );

				break;
			case ValueFormat::FORMAT_BOTH:
				$value = MediaId::to_array( $value );

				break;
		}

		return parent::update( $id, $value );
	}

}