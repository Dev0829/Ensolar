<?php

namespace ACA\JetEngine\Utils;

use Jet_Engine\Glossaries;
use Jet_Engine\Relations;
use Jet_Engine_Meta_Boxes;

final class Api {

	/**
	 * @return Relations\Manager
	 */
	static function Relations() {
		return jet_engine()->relations;
	}

	/**
	 * @return Jet_Engine_Meta_Boxes
	 */
	static function MetaBox() {
		return jet_engine()->meta_boxes;
	}

	/**
	 * @return Glossaries\Meta_Fields
	 */
	static function GlossariesMeta() {
		return jet_engine()->glossaries->meta_fields;
	}

}