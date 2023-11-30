<?php

namespace ACA\JetEngine\Column\Meta;

use ACA\JetEngine\Column;
use ACA\JetEngine\Editing;
use ACA\JetEngine\Field;
use ACA\JetEngine\Search;
use ACA\JetEngine\Sorting;
use ACP;
use DateTime;

/**
 * @property Field\Type\Date $field
 */
class Date extends Column\Meta implements ACP\Search\Searchable, ACP\Editing\Editable, ACP\Sorting\Sortable {

	use Search\SearchableTrait,
		Sorting\SortableTrait,
		Editing\EditableTrait;

	public function get_value( $id ) {
		$raw_value = $this->get_raw_value( $id );

		if ( ! $raw_value ) {
			return $this->get_empty_char();
		}

		$value = $this->field->is_timestamp()
			? $raw_value
			: DateTime::createFromFormat( 'Y-m-d', $raw_value )->format( 'U' );

		return $this->get_formatted_value( $value, $id );
	}

	protected function register_settings() {
		$this->add_setting( new \AC\Settings\Column\Date( $this ) );
	}

}