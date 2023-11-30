<?php

namespace ACA\JetEngine\Column\Meta;

use AC\Settings\Column\NumberOfItems;
use ACA\JetEngine\Column;
use ACA\JetEngine\Editing\EditableTrait;
use ACA\JetEngine\Field;
use ACA\JetEngine\Search\SearchableTrait;
use ACA\JetEngine\Utils\FieldOptions;
use ACP;

/**
 * @property Field\Type\Checkbox $field
 */
class Checkbox extends Column\Meta implements ACP\Search\Searchable, ACP\Editing\Editable {

	use SearchableTrait,
		EditableTrait;

	public function get_value( $id ) {
		$raw_value = $this->get_raw_value( $id );

		if ( empty( $raw_value ) ) {
			return $this->get_empty_char();
		}

		$options = $this->field->get_options();

		$result = array_map( function ( $key ) use ( $options ) {
			return isset( $options[ $key ] ) ? $options[ $key ] : null;
		}, $this->field->value_is_array() ? $raw_value : FieldOptions::get_checked_options( $raw_value ) );

		$setting_limit = $this->get_setting( 'number_of_items' );

		return empty( $result ) ?
			$this->get_empty_char() :
			ac_helper()->html->more( array_filter( $result ), $setting_limit ? $setting_limit->get_value() : false );
	}

	protected function register_settings() {
		$this->add_setting( new NumberOfItems( $this ) );
	}

}