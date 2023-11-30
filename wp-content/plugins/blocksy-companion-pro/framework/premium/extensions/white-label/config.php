<?php

$config = [
	//  translators: This is a brand name. Preferably to not be translated
	'name' => _x('White Label', 'Extension Brand Name', 'blocksy-companion'),
	'description' => __('Replace Blocksy\'s branding with your own. Easily hide licensing info and other sections of the theme and companion plugin from your clients and make your final product look more professional.', 'blocksy-companion'),
	'pro' => true,
	'hidden' => ! blc_fs()->is_plan('agency')
];