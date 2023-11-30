<?php

namespace ACA\JetEngine\Column\Meta;

use AC\Settings;
use ACA\JetEngine\Column;
use ACA\JetEngine\Editing\EditableTrait;
use ACA\JetEngine\Field;
use ACA\JetEngine\Search\SearchableTrait;
use ACA\JetEngine\Sorting;
use ACP;

/**
 * @property Field\Type\Posts $field
 */
class Post extends Column\Meta
	implements ACP\Search\Searchable, ACP\Editing\Editable, ACP\Sorting\Sortable {

	use SearchableTrait,
		EditableTrait;

	public function get_value( $id ) {
		$raw_value = $this->get_raw_value( $id );

		if ( empty( $raw_value ) ) {
			return $this->get_empty_char();
		}

		$post_ids = $this->field->is_multiple() && is_array( $raw_value )
			? $raw_value
			: [ $raw_value ];

		return implode( ', ', array_map( [ $this, 'format_post' ], $post_ids ) );
	}

	private function format_post( $post_id ) {
		return $this->get_formatted_value( $post_id, $post_id );
	}

	protected function register_settings() {
		$this->add_setting( new Settings\Column\Post( $this ) );
	}

	/**
	 * @return Settings\Column\Post
	 */
	private function get_post_setting() {
		$setting = $this->get_setting( Settings\Column\Post::NAME );

		return $setting instanceof Settings\Column\Post
			? $setting
			: null;
	}

	public function sorting() {
		return ( new Sorting\ModelFactory\Post )->create( $this->get_meta_type(), $this->get_meta_key(), $this->field->is_multiple(), $this->get_post_setting() );
	}

}