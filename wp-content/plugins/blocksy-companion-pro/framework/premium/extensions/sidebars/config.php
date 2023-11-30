<?php

$config = [
	//  translators: This is a brand name. Preferably to not be translated
	'name' => _x('Multiple Sidebars', 'Extension Brand Name', 'blocksy-companion'),
	'description' => __('Create unlimited personalized sets of widget areas and display them on any page or post using our conditional logic functionality.', 'blocksy-companion'),
	'pro' => true,
	'buttons' => [
		[
			'text' => __('Create New Sidebar', 'blocksy-companion'),
			'url' => admin_url('widgets.php')
		]
	]
];