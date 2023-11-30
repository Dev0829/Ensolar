<?php

namespace Jet_FB_Login\JetFormBuilder\Actions;

use Jet_FB_Login\ActionTrait;
use JetLoginCore\JetFormBuilder\SmartBaseAction;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Action extends SmartBaseAction {

	use ActionTrait;
}


