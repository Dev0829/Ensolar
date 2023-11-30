<?php

namespace ACA\JetEngine\Editing\Storage\Meta;

use AC\MetaType;
use ACA\JetEngine\Field\ValueFormat;
use ACA\JetEngine\Mapping\MediaId;
use ACP;

class Gallery extends ACP\Editing\Storage\Meta {

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

		$values = explode( ',', $value );

		return array_map( [ $this, 'format_single_value' ], $values );
	}

	private function format_single_value( $value ) {
		switch ( $this->value_format ) {
			case ValueFormat::FORMAT_URL:
				$value = array_map( [ MediaId::class, 'from_url' ], explode( ',', $value ) );

				break;
			case ValueFormat::FORMAT_BOTH:
				$value = array_map( [ MediaId::class, 'from_array' ], $value );

				break;
		}

		return $value;
	}

	public function update( $id, $value ) {
		if ( empty( $value ) ) {
			return parent::update( $id, $value );
		}

		switch ( $this->value_format ) {
			case ValueFormat::FORMAT_URL:
				$value = implode( ',', array_map( [ MediaId::class, 'to_url' ], $value ) );

				break;
			case ValueFormat::FORMAT_BOTH:
				$value = array_map( [ MediaId::class, 'to_array' ], $value );

				break;
			default:
				$value = implode( ',', $value );
		}

		return parent::update( $id, $value );
	}

}