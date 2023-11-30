<?php

namespace ACA\JetEngine\Column\Meta;

use AC\Settings\Column\WordLimit;
use ACA\JetEngine\Column;
use ACA\JetEngine\Editing;
use ACA\JetEngine\Search;
use ACA\JetEngine\Sorting;
use ACP;

class Textarea extends Column\Meta
	implements ACP\Search\Searchable, ACP\Editing\Editable, ACP\Sorting\Sortable {

	use Search\SearchableTrait,
		Sorting\SortableTrait,
		Editing\EditableTrait;

	protected function register_settings() {
		$this->add_setting( new WordLimit( $this ) );
	}

}