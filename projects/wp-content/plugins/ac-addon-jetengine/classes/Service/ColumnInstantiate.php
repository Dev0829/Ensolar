<?php

namespace ACA\JetEngine\Service;

use AC;
use ACA\JetEngine\Column;
use ACA\JetEngine\FieldRepository;
use ACA\JetEngine\Utils\Api;

final class ColumnInstantiate implements AC\Registrable {

	public function register() {
		add_action( 'ac/list_screen/column_created', [ $this, 'configure_column' ], 10 );
	}

	public function configure_column( AC\Column $column ) {
		if ( $column instanceof Column\Meta ) {
			$field = ( new FieldRepository() )->find_by_column( $column );

			if ( $field ) {
				$column->set_field( $field );
			}
		}

		if ( $column instanceof Column\RelationLegacy ) {
			$column->set_config( Api::Relations()->get_relation_info( $column->get_relation_key() ) );
		}

		if ( $column instanceof Column\Relation ) {
			$column->set_config( Api::Relations()->get_active_relations( $column->get_type() ) );
		}

	}

}