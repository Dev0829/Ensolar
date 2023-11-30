<?php

namespace ACA\JetEngine;

use AC;
use AC\Plugin\Version;
use AC\PluginInformation;
use AC\Registrable;

class JetEngine extends AC\Plugin {

	public function __construct( $file, Version $version ) {
		parent::__construct( $file, $version );
	}

	public function register() {
		$plugin_information = new PluginInformation( $this->get_basename() );
		$is_network_active = $plugin_information->is_network_active();
		$setup_factory = new AC\Plugin\SetupFactory( 'aca_jetengine_version', $this->get_version() );

		$services = [
			new Service\Admin( $this->get_location() ),
			new Service\ColumnInstantiate,
			new Service\ColumnGroups,
			new Service\RelationalColumns(),
			new Service\MetaColumns(),
			new AC\Service\Setup( $setup_factory->create( AC\Plugin\SetupFactory::SITE ) ),
		];

		if ( $is_network_active ) {
			$services[] = new AC\Service\Setup( $setup_factory->create( AC\Plugin\SetupFactory::NETWORK ) );
		}

		array_map( [ $this, 'register_service' ], $services );
	}

	private function register_service( $service ) {
		if ( $service instanceof Registrable ) {
			$service->register();
		}
	}

}