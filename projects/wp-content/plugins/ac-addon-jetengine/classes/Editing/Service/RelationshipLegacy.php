<?php

namespace ACA\JetEngine\Editing\Service;

use AC;
use ACA\JetEngine\Editing\Storage;
use ACP;

class RelationshipLegacy extends ACP\Editing\Service\BasicStorage implements ACP\Editing\PaginatedOptions {

	/**
	 * @var string
	 */
	private $related_post_type;

	/**
	 * @var boolean
	 */
	private $multiple;

	public function __construct( $related_key, $current_post_type, $related_post_type, $multiple ) {
		parent::__construct( new Storage\RelationshipLegacy( $related_key, $current_post_type ) );

		$this->related_post_type = (string) $related_post_type;
		$this->multiple = (bool) $multiple;
	}

	public function get_view( $context ) {
		if ( self::CONTEXT_BULK === $context ) {
			return false;
		}

		return ( new ACP\Editing\View\AjaxSelect() )->set_multiple( $this->multiple );
	}

	public function get_paginated_options( $search, $page, $id = null ) {
		$entities = new ACP\Helper\Select\Entities\Post( [
			's'         => $search,
			'paged'     => $page,
			'post_type' => $this->related_post_type,
		] );

		return new AC\Helper\Select\Options\Paginated(
			$entities,
			new ACP\Helper\Select\Group\PostType(
				new ACP\Helper\Select\Formatter\PostTitle( $entities )
			)
		);
	}

}