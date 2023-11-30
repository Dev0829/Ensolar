<?php

$prefix = 'wish_list';

$selector = '.ct-woo-account .ct-share-box';

if (get_theme_mod($prefix . '_has_share_box', 'no') === 'yes') {
	$share_box_icon_size = get_theme_mod($prefix . '_share_box_icon_size', 15);

	if ($share_box_icon_size !== 15) {
		blocksy_output_responsive([
			'css' => $css,
			'tablet_css' => $tablet_css,
			'mobile_css' => $mobile_css,
			'selector' => $selector,
			'variableName' => 'icon-size',
			'value' => $share_box_icon_size
		]);
	}

	$share_box_icons_spacing = get_theme_mod($prefix . '_share_box_icons_spacing', 10);

	if ($share_box_icons_spacing !== 10) {
		blocksy_output_responsive([
			'css' => $css,
			'tablet_css' => $tablet_css,
			'mobile_css' => $mobile_css,
			'selector' => $selector,
			'variableName' => 'spacing',
			'value' => $share_box_icons_spacing
		]);
	}


	blocksy_output_colors([
		'value' => get_theme_mod($prefix . '_share_items_icon_color', []),
		'default' => [
			'default' => [ 'color' => 'var(--color)' ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'variables' => [
			'default' => [
				'selector' => $selector,
				'variable' => 'icon-color'
			],
			'hover' => [
				'selector' => $selector,
				'variable' => 'icon-hover-color'
			],
		],
	]);
}
