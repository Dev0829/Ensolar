<?php

$config = [
	//  translators: This is a brand name. Preferably to not be translated
	'name' => _x('Advanced Menu', 'Extension Brand Name', 'blocksy-companion'),
	'description' => __('Create beautiful personalised menus that set your website apart from the others. Add icons and badges to your entries and even add Content Blocks inside your dropdowns.', 'blocksy-companion'),
	'pro' => true,
	'buttons' => [
		[
			'text' => __('Configure', 'blocksy-companion'),
			'url' => admin_url('nav-menus.php')
		]
	]
];