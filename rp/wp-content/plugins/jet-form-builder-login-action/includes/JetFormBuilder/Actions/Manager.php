<?php


namespace Jet_FB_Login\JetFormBuilder\Actions;

use Jet_FB_Login\Plugin;
use JetLoginCore\JetFormBuilder\ActionsManager;

class Manager extends ActionsManager {

	public function register_controller( \Jet_Form_Builder\Actions\Manager $manager ) {
		$manager->register_action_type( new Action() );
	}

	/**
	 * @return void
	 */
	public function before_init_editor_assets() {
		wp_enqueue_script(
			Plugin::instance()->slug,
			Plugin::instance()->plugin_url( 'assets/js/builder.editor.js' ),
			array(),
			Plugin::instance()->get_version(),
			true
		);
	}

	public function plugin_version_compare() {
		return '1.2.4';
	}

	public function on_base_need_update() {
		$this->add_admin_notice( 'warning', __(
			'<b>Warning</b>: <b>JetFormBuilder Login Action</b> needs <b>JetFormBuilder</b> update.',
			'jet-form-builder-login-action'
		) );
	}

	public function on_base_need_install() {
	}
}