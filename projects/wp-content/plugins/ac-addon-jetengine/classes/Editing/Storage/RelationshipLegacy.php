<?php

namespace ACA\JetEngine\Editing\Storage;

use ACA\JetEngine\Utils\Api;
use ACP;

class RelationshipLegacy implements ACP\Editing\Storage {

	/**
	 * @var string
	 */
	private $relationship_key;

	/**
	 * @var string
	 */
	private $current_post_type;

	public function __construct( $relationship_key, $current_post_type ) {
		$this->relationship_key = (string) $relationship_key;
		$this->current_post_type = (string) $current_post_type;
	}

	public function get( $id ) {
		$post_ids = Api::Relations()->get_related_posts( [
			'hash'    => $this->relationship_key,
			'current' => $this->current_post_type,
			'post_id' => $id,
		] );

		if ( empty( $post_ids ) ) {
			return [];
		}

		$result = [];

		foreach ( (array) $post_ids as $post_id ) {
			$result[ $post_id ] = get_the_title( $post_id );
		}

		return $result;
	}

	public function update( $id, $value ) {
		$ids = is_array( $value ) ? $value : [ $value ];

		return Api::Relations()->process_meta( true, (int) $id, $this->relationship_key, $ids );
	}

}