<?php

namespace ACA\JetEngine\Column\Meta;

use AC;
use ACA\JetEngine\Column;
use ACA\JetEngine\Editing\EditableTrait;
use ACA\JetEngine\Field;
use ACA\JetEngine\Mapping\MediaId;
use ACP;

/**
 * @property Field\Type\Gallery $field
 */
class Gallery extends Column\Meta implements ACP\Editing\Editable {

	use EditableTrait;

	public function get_value( $id ) {
		$raw = $this->get_raw_value( $id );

		if ( empty( $raw ) ) {
			return $this->get_empty_char();
		}

		$media_ids = array_filter( $this->get_media_id_by_value( $this->get_raw_value( $id ) ) );

		return empty( $media_ids )
			? $this->get_empty_char()
			: $this->get_formatted_value( $media_ids, $id );
	}

	private function get_media_id_by_value( $value ) {
		switch ( $this->field->get_value_format() ) {
			case Field\ValueFormat::FORMAT_URL:
				return array_map( 'attachment_url_to_postid', explode( ',', $value ) );

			case Field\ValueFormat::FORMAT_BOTH:
				return array_map( [ MediaId::class, 'from_array' ], $value );

			default:
				return explode( ',', $value );
		}
	}

	protected function register_settings() {
		$this->add_setting( new AC\Settings\Column\Images( $this ) );
	}

}