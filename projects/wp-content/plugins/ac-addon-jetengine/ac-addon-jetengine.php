<?php
/*
Plugin Name:    Admin Columns Pro - JetEngine
Version:        1.1.3
Description:    Supercharges Admin Columns Pro with columns for JetEngine.
Author:         AdminColumns.com
Author URI:     https://www.admincolumns.com
Plugin URI:     https://www.admincolumns.com
Text Domain:    codepress-admin-columns
Requires PHP:   5.6.20
*/

use AC\Plugin\Version;
use ACA\JetEngine\Dependencies;
use ACA\JetEngine\JetEngine;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! is_admin() ) {
	return;
}

define( 'ACA_JE_VERSION', '1.1.3' );

require_once __DIR__ . '/classes/Dependencies.php';

function aca_jetengine_is_minimum_required_version( $minimum_jet_engine_version ) {
	$jet_engine = jet_engine();

	if ( ! $jet_engine ) {
		return false;
	}

	return version_compare( $jet_engine->get_version(), $minimum_jet_engine_version, '>=' );
}

add_action( 'after_setup_theme', function () {

	$dependencies = new Dependencies( plugin_basename( __FILE__ ), ACA_JE_VERSION );
	$dependencies->requires_acp( '5.7' );
	$dependencies->requires_php( '5.6.20' );

	$minimum_jet_engine_version = '2.11.0';

	if ( ! class_exists( 'Jet_Engine', false ) || ! aca_jetengine_is_minimum_required_version( $minimum_jet_engine_version ) ) {
		$dependencies->add_missing_plugin( 'JetEngine', 'https://crocoblock.com/plugins/jetengine/', $minimum_jet_engine_version );
	}

	if ( $dependencies->has_missing() ) {
		return;
	}

	$class_map = __DIR__ . '/config/autoload-classmap.php';

	if ( is_readable( $class_map ) ) {
		AC\Autoloader::instance()->register_class_map( require $class_map );
	} else {
		AC\Autoloader::instance()->register_prefix( 'ACA\JetEngine', __DIR__ . '/classes' );
	}

	$addon = new JetEngine( __FILE__, new Version( ACA_JE_VERSION ) );
	$addon->register();
} );