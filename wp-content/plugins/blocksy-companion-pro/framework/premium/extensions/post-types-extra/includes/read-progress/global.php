<?php

$has_read_progress = get_theme_mod(
	$prefix . '_has_read_progress',
	'no'
);

if ($has_read_progress === 'no') {
	return;
}

$bar_height = get_theme_mod($prefix . '_read_progress_height', 3);

if ($bar_height !== 3) {
	$css->put(
		blocksy_prefix_selector('.ct-read-progress-bar', $prefix),
		'--progress-bar-height: ' . $bar_height . 'px'
	);
}

blc_call_fn(['fn' => 'blocksy_output_colors'], [
	'value' => get_theme_mod($prefix . '_progress_bar_filled_color'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'variables' => [
		'default' => [
			'selector' => blocksy_prefix_selector('.ct-read-progress-bar', $prefix),
			'variable' => 'progress-bar-scroll'
		],
	],
	'responsive' => true,
]);


blc_call_fn(['fn' => 'blocksy_output_colors'], [
	'value' => get_theme_mod($prefix . '_progress_bar_background_color'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'variables' => [
		'default' => [
			'selector' => blocksy_prefix_selector('.ct-read-progress-bar', $prefix),
			'variable' => 'progress-bar-background'
		],
	],
	'responsive' => true,
]);
