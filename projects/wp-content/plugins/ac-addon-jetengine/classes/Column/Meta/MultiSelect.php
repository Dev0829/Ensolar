<?php

namespace ACA\JetEngine\Column\Meta;

use AC\Settings\Column\NumberOfItems;
use ACA\JetEngine\Field;

/**
 * @property Field\Type\Select $field
 */
class MultiSelect extends Select {

	public function get_value( $id ) {
		$raw_value = $this->get_raw_value( $id );

		if ( empty( $raw_value ) || ! is_array( $raw_value ) ) {
			return $this->get_empty_char();
		}

		$options = $this->field->get_options();

		$result = array_map( function ( $key ) use ( $options ) {
			return isset( $options[ $key ] ) ? $options[ $key ] : $key;
		}, $raw_value );

		$setting_limit = $this->get_setting( 'number_of_items' );

		return empty( $result ) ?
			$this->get_empty_char() :
			ac_helper()->html->more( array_filter( $result ), $setting_limit ? $setting_limit->get_value() : false );
	}

	protected function register_settings() {
		$this->add_setting( new NumberOfItems( $this ) );
	}

}