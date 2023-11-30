<?php

namespace ACA\JetEngine\Column\Meta;

use ACA\JetEngine\Column;
use ACA\JetEngine\Editing;
use ACA\JetEngine\Search;
use ACA\JetEngine\Sorting;
use ACP;

class ColorPicker extends Column\Meta
	implements ACP\Search\Searchable, ACP\Editing\Editable, ACP\Sorting\Sortable {

	use Search\SearchableTrait,
		Sorting\SortableTrait,
		Editing\EditableTrait;

	public function get_value( $id ) {
		$raw_value = $this->get_raw_value( $id );

		return $raw_value
			? ac_helper()->string->get_color_block( $this->get_raw_value( $id ) )
			: $this->get_empty_char();
	}

}