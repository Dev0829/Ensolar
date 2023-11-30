<?php

$config = [
	//  translators: This is a brand name. Preferably to not be translated
	'name' => _x('Shortcuts Bar', 'Extension Brand Name', 'blocksy-companion'),
	'description' => __(
		'Easily turn your websites into mobile first experiences. You can easily add the most important actions at the bottom of the screen for easy access.',
		'blocksy-companion'
	),
	'pro' => true,
	'buttons' => [
		[
			'text' => __('Configure', 'blocksy-companion'),
			'url' => admin_url('customize.php?autofocus[section]=shortcuts_ext')
		]
	]
];