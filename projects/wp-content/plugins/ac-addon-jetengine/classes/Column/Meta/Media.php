<?php

namespace ACA\JetEngine\Column\Meta;

use ACA\JetEngine\Column;
use ACA\JetEngine\Editing;
use ACA\JetEngine\Field;
use ACA\JetEngine\Search;
use ACA\JetEngine\Sorting;
use ACP;

/**
 * @property Field\Type\Media $field
 */
class Media extends Column\Meta
	implements ACP\Search\Searchable, ACP\Editing\Editable, ACP\Sorting\Sortable {

	use Search\SearchableTrait,
		Editing\EditableTrait,
		Sorting\SortableTrait;

	public function get_value( $id ) {
		$value = $this->get_raw_value( $id );

		if ( empty( $value ) ) {
			return $this->get_empty_char();
		}

		$url = $this->get_media_url_by_value( $value );

		return $url
			? ac_helper()->html->link( $url, esc_html( basename( $url ) ), [ 'target' => '_blank' ] )
			: '<em>' . __( 'Invalid attachment', 'codepress-admin-columns' ) . '</em>';
	}

	private function get_media_url_by_value( $value ) {
		switch ( $this->field->get_value_format() ) {
			case Field\ValueFormat::FORMAT_ID:
				return wp_get_attachment_url( $value );
			case Field\ValueFormat::FORMAT_BOTH:
				return is_array( $value ) && isset( $value['url'] ) ? $value['url'] : false;
			default:
				return $value;
		}
	}

}