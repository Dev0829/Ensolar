<?php

namespace ACA\JetEngine\Column\Meta;

use ACA\JetEngine\Column;
use ACA\JetEngine\Editing;
use ACA\JetEngine\Field;
use ACA\JetEngine\Search;
use ACA\JetEngine\Sorting;
use ACP;

/**
 * @property Field\Type\Radio $field
 */
class Radio extends Column\Meta
	implements ACP\Search\Searchable, ACP\Editing\Editable, ACP\Sorting\Sortable {

	use Search\SearchableTrait,
		Sorting\SortableTrait,
		Editing\EditableTrait;

	public function get_value( $id ) {
		$raw_value = $this->get_raw_value( $id );

		if ( empty( $raw_value ) ) {
			return $this->get_empty_char();
		}

		$options = $this->get_options();

		return isset( $options[ $raw_value ] )
			? $options[ $raw_value ]
			: $raw_value;
	}

}