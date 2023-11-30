<?php

if (! function_exists('is_woocommerce')) {
	return;
}

// Floating bar
$position = blocksy_expand_responsive_value(get_theme_mod('floating_bar_position', 'top'));
$visibility = blocksy_expand_responsive_value(
	get_theme_mod(
		'floatingBarVisibility',
		[
			'desktop' => true,
			'tablet' => true,
			'mobile' => false,
		]
	)
);

if (
	$position['desktop'] !== 'top'
	||
	$position['tablet'] !== 'top'
	||
	$position['mobile'] !== 'top'
) {
	blocksy_output_responsive([
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'selector' => '.ct-floating-bar',
		'variableName' => 'top-position-override',
		'value' => [
			'desktop' => $position['desktop'] === 'top' ? 'var(--top-position)' : 'var(--false)',
			'tablet' => $position['tablet'] === 'top' ? 'var(--top-position)' : 'var(--false)',
			'mobile' => $position['mobile'] === 'top' ? 'var(--top-position)' : 'var(--false)'
		],
		'unit' => '',
	]);

	blocksy_output_responsive([
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'selector' => '.ct-floating-bar',
		'variableName' => 'translate-offset',
		'value' => [
			'desktop' => $position['desktop'] === 'top' ? '-75px' : '75px',
			'tablet' => $position['tablet'] === 'top' ? '-75px' : '75px',
			'mobile' => $position['mobile'] === 'top' ? '-75px' : '75px'
		],
		'unit' => '',
	]);
}

blocksy_output_responsive([
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.has-floating-cart #main-container',
	'variableName' => 'floating-cart-spacer',
	'value' => [
		'desktop' => $position['desktop'] === 'top' || ! $visibility['desktop'] ? '0px' : '75px',
		'tablet' => $position['tablet'] === 'top' || ! $visibility['tablet'] ? '0px' : '75px',
		'mobile' => $position['mobile'] === 'top' || ! $visibility['mobile'] ? '0px' : '75px'
	],
	'unit' => '',
]);


blc_call_fn(['fn' => 'blocksy_output_colors'], [
	'value' => get_theme_mod('floatingBarFontColor'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'responsive' => true,
	'variables' => [
		'default' => [
			'selector' => '.ct-floating-bar .ct-item-title, .ct-floating-bar .price',
			'variable' => 'color'
		],
	],
]);

blc_call_fn(['fn' => 'blocksy_output_background_css'], [
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'responsive' => true,
	'selector' => '.ct-floating-bar',
	'value' => get_theme_mod('floatingBarBackground',
		blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => '#ffffff'
				],
			],
		])
	)
]);

blc_call_fn(['fn' => 'blocksy_output_box_shadow'], [
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '.ct-floating-bar',
	'should_skip_output' => false,
	'value' => get_theme_mod(
		'floatingBarShadow',
		blc_call_fn(['fn' => 'blocksy_box_shadow_value'], [
			'enable' => true,
			'h_offset' => 0,
			'v_offset' => 10,
			'blur' => 20,
			'spread' => 0,
			'inset' => false,
			'color' => [
				'color' => 'rgba(44,62,80,0.15)',
			],
		])
	),
	'responsive' => true
]);


// off canvas filter
blc_call_fn(['fn' => 'blocksy_output_responsive'], [
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '#woo-filters-panel',
	'variableName' => 'side-panel-width',
	'responsive' => true,
	'unit' => '',
	'value' => get_theme_mod('filter_panel_width', [
		'desktop' => '500px',
		'tablet' => '65vw',
		'mobile' => '90vw',
	])
]);

$panel_widgets_spacing = get_theme_mod( 'panel_widgets_spacing', 60 );

if ($panel_widgets_spacing !== 60) {
	blc_call_fn(['fn' => 'blocksy_output_responsive'], [
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'selector' => '#woo-filters-panel .ct-sidebar',
		'variableName' => 'sidebar-widgets-spacing',
		'value' => $panel_widgets_spacing,
	]);
}

$vertical_alignment = get_theme_mod( 'filter_panel_content_vertical_alignment', 'flex-start' );

if ($vertical_alignment !== 'flex-start') {
	blocksy_output_responsive([
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'selector' => '#woo-filters-panel',
		'variableName' => 'vertical-alignment',
		'unit' => '',
		'value' => $vertical_alignment,
	]);
}

blc_call_fn(['fn' => 'blocksy_output_font_css'], [
	'font_value' => get_theme_mod( 'filter_panel_widgets_title_font',
		blocksy_typography_default_values([
			// 'size' => '18px',
		])
	),
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '#woo-filters-panel .widget-title',
]);

blc_call_fn(['fn' => 'blocksy_output_colors'], [
	'value' => get_theme_mod('filter_panel_widgets_title_color'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'variables' => [
		'default' => [
			'selector' => '#woo-filters-panel .widget-title',
			'variable' => 'heading-color'
		],
	],
	'responsive' => true
]);


blc_call_fn(['fn' => 'blocksy_output_font_css'], [
	'font_value' => get_theme_mod( 'filter_panel_widgets_font',
		blocksy_typography_default_values([
			// 'size' => '18px',
		])
	),
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '#woo-filters-panel .ct-widget > *:not(.widget-title):not(blockquote)',
]);

blc_call_fn(['fn' => 'blocksy_output_colors'], [
	'value' => get_theme_mod('filter_panel_widgets_font_color'),
	'default' => [
		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		'link_initial' => [ 'color' => 'var(--color)' ],
		'link_hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'variables' => [
		'default' => [
			'selector' => '#woo-filters-panel .ct-sidebar > *',
			'variable' => 'color'
		],

		'link_initial' => [
			'selector' => '#woo-filters-panel .ct-sidebar',
			'variable' => 'linkInitialColor'
		],

		'link_hover' => [
			'selector' => '#woo-filters-panel .ct-sidebar',
			'variable' => 'linkHoverColor'
		],
	],
	'responsive' => true
]);

blc_call_fn(['fn' => 'blocksy_output_background_css'], [
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'responsive' => true,
	'selector' => '#woo-filters-panel .ct-panel-inner',
	'value' => get_theme_mod('filter_panel_background',
		blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => '#ffffff'
				],
			],
		])
	)
]);

blc_call_fn(['fn' => 'blocksy_output_background_css'], [
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'responsive' => true,
	'selector' => '#woo-filters-panel',
	'value' => get_theme_mod('filter_panel_backgrop',
		blocksy_background_default_value([
			'backgroundColor' => [
				'default' => [
					'color' => 'rgba(18, 21, 25, 0.6)'
				],
			],
		])
	)
]);

$close_button_type = get_theme_mod('filter_panel_close_button_type', 'type-1');

blc_call_fn(['fn' => 'blocksy_output_colors'], [
	'value' => get_theme_mod('filter_panel_close_button_color'),
	'default' => [
		'default' => [ 'color' => 'rgba(0, 0, 0, 0.5)' ],
		'hover' => [ 'color' => 'rgba(0, 0, 0, 0.8)' ],
	],
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'responsive' => true,
	'variables' => [
		'default' => [
			'selector' => '#woo-filters-panel .ct-toggle-close',
			'variable' => 'icon-color'
		],

		'hover' => [
			'selector' => '#woo-filters-panel .ct-toggle-close:hover',
			'variable' => 'icon-color'
		]
	],
]);

if ($close_button_type === 'type-2') {
	blc_call_fn(['fn' => 'blocksy_output_colors'], [
		'value' => get_theme_mod('filter_panel_close_button_border_color'),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'responsive' => true,
		'variables' => [
			'default' => [
				'selector' => '#woo-filters-panel .ct-toggle-close[data-type="type-2"]',
				'variable' => 'toggle-button-border-color'
			],

			'hover' => [
				'selector' => '#woo-filters-panel .ct-toggle-close[data-type="type-2"]:hover',
				'variable' => 'toggle-button-border-color'
			]
		],
	]);
}


if ($close_button_type === 'type-3') {
	blc_call_fn(['fn' => 'blocksy_output_colors'], [
		'value' => get_theme_mod('filter_panel_close_button_shape_color'),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'responsive' => true,
		'variables' => [
			'default' => [
				'selector' => '#woo-filters-panel .ct-toggle-close[data-type="type-3"]',
				'variable' => 'toggle-button-background'
			],

			'hover' => [
				'selector' => '#woo-filters-panel .ct-toggle-close[data-type="type-3"]:hover',
				'variable' => 'toggle-button-background'
			]
		],
	]);
}

$filter_panel_close_button_icon_size = get_theme_mod( 'filter_panel_close_button_icon_size', 12 );

if ($filter_panel_close_button_icon_size !== 12) {
	$css->put( 
		'#woo-filters-panel .ct-toggle-close',
		'--icon-size: ' . $filter_panel_close_button_icon_size . 'px' 
	);
}


if ($close_button_type !== 'type-1') {
	$filter_panel_close_button_border_radius = get_theme_mod( 'filter_panel_close_button_border_radius', 5 );

	if ($filter_panel_close_button_border_radius !== 5) {
		$css->put( 
			'#woo-filters-panel .ct-toggle-close',
			'--toggle-button-radius: ' . $filter_panel_close_button_border_radius . 'px' 
		);
	}
}

blc_call_fn(['fn' => 'blocksy_output_box_shadow'], [
	'css' => $css,
	'tablet_css' => $tablet_css,
	'mobile_css' => $mobile_css,
	'selector' => '#woo-filters-panel',
	'value' => get_theme_mod('filter_panel_shadow', blocksy_box_shadow_value([
		'enable' => true,
		'h_offset' => 0,
		'v_offset' => 0,
		'blur' => 70,
		'spread' => 0,
		'inset' => false,
		'color' => [
			'color' => 'rgba(0, 0, 0, 0.35)',
		],
	])),
	'responsive' => true
]);

// share box
$product_share_box_icons_size = get_theme_mod( 'product_share_box_icons_size', 15 );

if ($product_share_box_icons_size !== 15) {
	blc_call_fn(['fn' => 'blocksy_output_responsive'], [
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'selector' => blocksy_prefix_selector('.ct-share-box', 'product'),
		'variableName' => 'icon-size',
		'value' => $product_share_box_icons_size
	]);
}

$product_share_box_icons_spacing = get_theme_mod( 'product_share_box_icons_spacing', 10 );

if ($product_share_box_icons_spacing !== 10) {
	blc_call_fn(['fn' => 'blocksy_output_responsive'], [
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'selector' => blocksy_prefix_selector('.ct-share-box', 'product'),
		'variableName' => 'spacing',
		'value' => $product_share_box_icons_spacing
	]);
}

blocksy_output_colors([
	'value' => get_theme_mod('product_share_items_icon_color', []),
	'default' => [
		'default' => [ 'color' => 'var(--color)' ],
		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	],
	'css' => $css,
	'variables' => [
		'default' => [
			'selector' => blocksy_prefix_selector('.ct-share-box', 'product'),
			'variable' => 'icon-color'
		],
		'hover' => [
			'selector' => blocksy_prefix_selector('.ct-share-box', 'product'),
			'variable' => 'icon-hover-color'
		],
	],
]);

// Single product type 2
$product_view_stacked_columns = get_theme_mod('product_view_stacked_columns', 2);

if ($product_view_stacked_columns !== 2) {
	blocksy_output_responsive([
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'selector' => '.ct-stacked-gallery .woocommerce-product-gallery',
		'variableName' => 'columns',
		'value' => $product_view_stacked_columns,
		'unit' => ''
	]);
}

$product_view_columns_top = get_theme_mod('product_view_columns_top', 3);

if ($product_view_columns_top !== 3) {
	blocksy_output_responsive([
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'selector' => '.ct-columns-top-gallery .woocommerce-product-gallery',
		'variableName' => 'columns',
		'value' => $product_view_columns_top,
		'unit' => ''
	]);
}

// add to wishlist buttons
$archive_wishlist = get_theme_mod('has_archive_wishlist', 'no');

if ($archive_wishlist === 'yes') {

	blocksy_output_colors([
		'value' => get_theme_mod('archive_wishlist_button_icon_color', []),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'responsive' => true,
		'variables' => [
			'default' => [
				'selector' => '.ct-wishlist-button-archive',
				'variable' => 'icon-color'
			],
			'hover' => [
				'selector' => '.ct-wishlist-button-archive',
				'variable' => 'icon-hover-color'
			],
		],
	]);

	blocksy_output_colors([
		'value' => get_theme_mod('archive_wishlist_button_background_color', []),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'responsive' => true,
		'variables' => [
			'default' => [
				'selector' => '.ct-wishlist-button-archive',
				'variable' => 'trigger-background'
			],
			'hover' => [
				'selector' => '.ct-wishlist-button-archive',
				'variable' => 'trigger-hover-background'
			],
		],
	]);
}

$single_wishlist = get_theme_mod('has_single_wishlist', 'no');

if ($single_wishlist === 'yes') {
	blocksy_output_colors([
		'value' => get_theme_mod('single_wishlist_button_icon_color', []),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'responsive' => true,
		'variables' => [
			'default' => [
				'selector' => '.product[class*="gallery"] .ct-wishlist-button-single',
				'variable' => 'icon-color'
			],
			'hover' => [
				'selector' => '.product[class*="gallery"] .ct-wishlist-button-single',
				'variable' => 'icon-hover-color'
			],
		],
	]);

	// blocksy_output_colors([
	// 	'value' => get_theme_mod('single_wishlist_button_background_color', []),
	// 	'default' => [
	// 		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	// 		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	// 	],
	// 	'css' => $css,
	// 	'tablet_css' => $tablet_css,
	// 	'mobile_css' => $mobile_css,
	// 	'responsive' => true,
	// 	'variables' => [
	// 		'default' => [
	// 			'selector' => '.product[class*="gallery"] .ct-wishlist-button-single',
	// 			'variable' => 'border-color'
	// 		],
	// 		'hover' => [
	// 			'selector' => '.product[class*="gallery"] .ct-wishlist-button-single',
	// 			'variable' => 'border-hover-color'
	// 		],
	// 	],
	// ]);
}

$quick_view_wishlist = get_theme_mod('has_quick_view_wishlist', 'no');

if ($quick_view_wishlist === 'yes') {
	blocksy_output_colors([
		'value' => get_theme_mod('quick_view_wishlist_button_icon_color', []),
		'default' => [
			'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
			'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
		],
		'css' => $css,
		'tablet_css' => $tablet_css,
		'mobile_css' => $mobile_css,
		'responsive' => true,
		'variables' => [
			'default' => [
				'selector' => '.ct-quick-view-card .ct-wishlist-button-single',
				'variable' => 'icon-color'
			],
			'hover' => [
				'selector' => '.ct-quick-view-card .ct-wishlist-button-single',
				'variable' => 'icon-hover-color'
			],
		],
	]);

	// blocksy_output_colors([
	// 	'value' => get_theme_mod('quick_view_wishlist_button_background_color', []),
	// 	'default' => [
	// 		'default' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	// 		'hover' => [ 'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT') ],
	// 	],
	// 	'css' => $css,
	// 	'tablet_css' => $tablet_css,
	// 	'mobile_css' => $mobile_css,
	// 	'responsive' => true,
	// 	'variables' => [
	// 		'default' => [
	// 			'selector' => '.ct-quick-view-card .ct-wishlist-button-single',
	// 			'variable' => 'trigger-background'
	// 		],
	// 		'hover' => [
	// 			'selector' => '.ct-quick-view-card .ct-wishlist-button-single',
	// 			'variable' => 'trigger-hover-background'
	// 		],
	// 	],
	// ]);
}
