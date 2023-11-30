<?php
$options = [
	'label' => __( 'Off Canvas Filter', 'blocksy-companion' ),
	'type' => 'ct-panel',
	'switch' => true,
	'value' => 'no',
	'sync' => blocksy_sync_whole_page([
		'loader_selector' => '.woo-listing-top'
	]),
	'inner-options' => [

		blocksy_rand_md5() => [
			'type' => 'ct-title',
			'label' => __( 'Filter Widgets', 'blocksy-companion' ),
		],

		blocksy_rand_md5() => [
			'title' => __( 'Widgets', 'blocksy-companion' ),
			'type' => 'tab',
			'options' => [

				'widget' => [
					'type' => 'ct-widget-area',
					'sidebarId' => 'sidebar-woocommerce-offcanvas-filters'
				]

			]
		],

		blocksy_rand_md5() => [
			'title' => __( 'Design', 'blocksy-companion' ),
			'type' => 'tab',
			'options' => [

				'panel_widgets_spacing' => [
					'label' => __( 'Widgets Vertical Spacing', 'blocksy-companion' ),
					'type' => 'ct-slider',
					'min' => 0,
					'max' => 100,
					'value' => 60,
					'responsive' => true,
					'setting' => [ 'transport' => 'postMessage' ],
				],

				blocksy_rand_md5() => [
					'type' => 'ct-divider',
				],

				'filter_panel_widgets_title_font' => [
					'type' => 'ct-typography',
					'label' => __( 'Widgets Title Font', 'blocksy-companion' ),
					'value' => blocksy_typography_default_values([
						// 'size' => '18px',
					]),
					'setting' => [ 'transport' => 'postMessage' ],
				],

				'filter_panel_widgets_title_color' => [
					'label' => __( 'Widgets Title Font Color', 'blocksy-companion' ),
					'type'  => 'ct-color-picker',
					'design' => 'block:right',
					'responsive' => true,
					'setting' => [ 'transport' => 'postMessage' ],

					'value' => [
						'default' => [
							'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
						],
					],

					'pickers' => [
						[
							'title' => __( 'Initial', 'blocksy-companion' ),
							'id' => 'default',
							'inherit_source' => 'global',
							'inherit' => [
								'var(--heading-1-color, var(--headings-color))' => [
									'widgets_title_wrapper' => 'h1'
								],

								'var(--heading-2-color, var(--headings-color))' => [
									'widgets_title_wrapper' => 'h2'
								],

								'var(--heading-3-color, var(--headings-color))' => [
									'widgets_title_wrapper' => 'h3'
								],

								'var(--heading-4-color, var(--headings-color))' => [
									'widgets_title_wrapper' => 'h4'
								],

								'var(--heading-5-color, var(--headings-color))' => [
									'widgets_title_wrapper' => 'h5'
								],

								'var(--heading-6-color, var(--headings-color))' => [
									'widgets_title_wrapper' => 'h6'
								]
							]
						],
					],
				],

				'filter_panel_widgets_font' => [
					'type' => 'ct-typography',
					'label' => __( 'Widgets Font', 'blocksy-companion' ),
					'value' => blocksy_typography_default_values([
						// 'size' => '16px',
					]),
					'divider' => 'top',
					'setting' => [ 'transport' => 'postMessage' ],
				],

				'filter_panel_widgets_font_color' => [
					'label' => __( 'Widgets Font Color', 'blocksy-companion' ),
					'type'  => 'ct-color-picker',
					'design' => 'block:right',
					'responsive' => true,
					'divider' => 'bottom',
					'setting' => [ 'transport' => 'postMessage' ],
					'value' => [
						'default' => [
							'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
						],

						'link_initial' => [
							'color' => 'var(--color)',
						],

						'link_hover' => [
							'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
						],
					],

					'pickers' => [
						[
							'title' => __( 'Text Initial', 'blocksy-companion' ),
							'id' => 'default',
							'inherit' => 'var(--color)'
						],

						[
							'title' => __( 'Link Initial', 'blocksy-companion' ),
							'id' => 'link_initial',
						],

						[
							'title' => __( 'Link Hover', 'blocksy-companion' ),
							'id' => 'link_hover',
							'inherit' => 'var(--linkHoverColor)'
						],
					],
				],
			]
		],

		blocksy_rand_md5() => [
			'type' => 'ct-title',
			'label' => __( 'Filter Button & Panel', 'blocksy-companion' ),
		],

		blocksy_rand_md5() => [
			'title' => __( 'General', 'blocksy-companion' ),
			'type' => 'tab',
			'options' => [

				'woocommerce_filter_type' => [
					'label' => __( 'Filter Icon Type', 'blocksy-companion' ),
					'type' => 'ct-image-picker',
					'value' => 'type-1',
					'attr' => [
						'data-type' => 'background',
						'data-columns' => '4',
					],
					'sync' => [
						'selector' => '[href*="woo-filters-panel"]',
						'render' => function () {
							echo blc_get_woo_offcanvas_trigger();
						}
					],
					'choices' => [

						'type-1' => [
							'src'   => blocksy_image_picker_file( 'filter-1' ),
							'title' => __( 'Type 1', 'blocksy-companion' ),
						],

						'type-2' => [
							'src'   => blocksy_image_picker_file( 'filter-2' ),
							'title' => __( 'Type 2', 'blocksy-companion' ),
						],

						'type-3' => [
							'src'   => blocksy_image_picker_file( 'filter-3' ),
							'title' => __( 'Type 3', 'blocksy-companion' ),
						],

						'type-4' => [
							'src'   => blocksy_image_picker_file( 'filter-4' ),
							'title' => __( 'Type 4', 'blocksy-companion' ),
						],
					],
				],

				'woocommerce_filter_visibility' => [
					'label' => __( 'Filter Button Visibility', 'blocksy-companion' ),
					'type' => 'ct-visibility',
					'design' => 'block',
					'divider' => 'top',
					'setting' => [ 'transport' => 'postMessage' ],
					'value' => [
						'desktop' => true,
						'tablet' => true,
						'mobile' => true,
					],

					'choices' => blocksy_ordered_keys([
						'desktop' => __( 'Desktop', 'blocksy-companion' ),
						'tablet' => __( 'Tablet', 'blocksy-companion' ),
						'mobile' => __( 'Mobile', 'blocksy-companion' ),
					]),
				],

				blocksy_rand_md5() => [
					'type' => 'ct-divider',
				],

				'filter_panel_position' => [
					'label' => __('Panel Reveal', 'blocksy-companion'),
					'type' => 'ct-radio',
					'value' => 'right',
					'view' => 'text',
					'design' => 'block',
					'setting' => [ 'transport' => 'postMessage' ],
					'choices' => [
						'left' => __( 'Left Side', 'blocksy-companion' ),
						'right' => __( 'Right Side', 'blocksy-companion' ),
					],
				],

				'filter_panel_width' => [
					'label' => __( 'Panel Width', 'blocksy-companion' ),
					'type' => 'ct-slider',
					'value' => [
						'desktop' => '500px',
						'tablet' => '65vw',
						'mobile' => '90vw',
					],
					'units' => blocksy_units_config([
						[ 'unit' => 'px', 'min' => 0, 'max' => 1000 ],
					]),
					'divider' => 'top',
					'responsive' => true,
					'setting' => [ 'transport' => 'postMessage' ],
				],

				'filter_panel_content_vertical_alignment' => [
					'type' => 'ct-radio',
					'label' => __( 'Vertical Alignment', 'blocksy-companion' ),
					'view' => 'text',
					'design' => 'block',
					'divider' => 'top',
					'responsive' => true,
					'attr' => [ 'data-type' => 'vertical-alignment' ],
					'setting' => [ 'transport' => 'postMessage' ],
					'value' => 'flex-start',
					'choices' => [
						'flex-start' => '',
						'center' => '',
						'flex-end' => '',
					],
				],

			],
		],

		blocksy_rand_md5() => [
			'title' => __( 'Design', 'blocksy-companion' ),
			'type' => 'tab',
			'options' => [

				'filter_panel_background' => [
					'label' => __( 'Panel Background', 'blocksy-companion' ),
					'type'  => 'ct-background',
					'design' => 'block:right',
					'responsive' => true,
					'divider' => 'top',
					'setting' => [ 'transport' => 'postMessage' ],
					'value' => blocksy_background_default_value([
						'backgroundColor' => [
							'default' => [
								'color' => '#ffffff'
							],
						],
					])
				],

				'filter_panel_backgrop' => [
					'label' => __( 'Panel Backdrop', 'blocksy' ),
					'type'  => 'ct-background',
					'design' => 'block:right',
					'responsive' => true,
					'divider' => 'top',
					'setting' => [ 'transport' => 'postMessage' ],
					'value' => blocksy_background_default_value([
						'backgroundColor' => [
							'default' => [
								'color' => 'rgba(18, 21, 25, 0.6)'
							],
						],
					])
				],

				'filter_panel_shadow' => [
					'label' => __( 'Panel Shadow', 'blocksy-companion' ),
					'type' => 'ct-box-shadow',
					'design' => 'block',
					'divider' => 'top',
					'responsive' => true,
					'value' => blocksy_box_shadow_value([
						'enable' => true,
						'h_offset' => 0,
						'v_offset' => 0,
						'blur' => 70,
						'spread' => 0,
						'inset' => false,
						'color' => [
							'color' => 'rgba(0, 0, 0, 0.35)',
						],
					])
				],

				'filter_panel_close_button_type' => [
					'label' => __('Close Button Type', 'blocksy-companion'),
					'type' => 'ct-select',
					'value' => 'type-1',
					'view' => 'text',
					'design' => 'inline',
					'divider' => 'top',
					'setting' => [ 'transport' => 'postMessage' ],
					'choices' => blocksy_ordered_keys(
						[
							'type-1' => __( 'Simple', 'blocksy-companion' ),
							'type-2' => __( 'Border', 'blocksy-companion' ),
							'type-3' => __( 'Background', 'blocksy-companion' ),
						]
					),
				],

				'filter_panel_close_button_color' => [
					'label' => __( 'Icon Color', 'blocksy-companion' ),
					'type'  => 'ct-color-picker',
					'design' => 'block',
					'responsive' => true,
					'setting' => [ 'transport' => 'postMessage' ],
					'value' => [
						'default' => [
							'color' => 'rgba(0, 0, 0, 0.5)',
						],

						'hover' => [
							'color' => 'rgba(0, 0, 0, 0.8)',
						],
					],

					'pickers' => [
						[
							'title' => __( 'Initial', 'blocksy-companion' ),
							'id' => 'default',
						],

						[
							'title' => __( 'Hover', 'blocksy-companion' ),
							'id' => 'hover',
						],
					],
				],

				blocksy_rand_md5() => [
					'type' => 'ct-condition',
					'condition' => [ 'filter_panel_close_button_type' => 'type-2' ],
					'options' => [

						'filter_panel_close_button_border_color' => [
							'label' => __( 'Border Color', 'blocksy-companion' ),
							'type'  => 'ct-color-picker',
							'design' => 'block',
							'responsive' => true,
							'setting' => [ 'transport' => 'postMessage' ],
							'value' => [
								'default' => [
									'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
								],

								'hover' => [
									'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
								],
							],

							'pickers' => [
								[
									'title' => __( 'Initial', 'blocksy-companion' ),
									'id' => 'default',
									'inherit' => 'rgba(0, 0, 0, 0.5)'
								],

								[
									'title' => __( 'Hover', 'blocksy-companion' ),
									'id' => 'hover',
									'inherit' => 'rgba(0, 0, 0, 0.5)'
								],
							],
						],

					],
				],

				blocksy_rand_md5() => [
					'type' => 'ct-condition',
					'condition' => [ 'filter_panel_close_button_type' => 'type-3' ],
					'options' => [

						'filter_panel_close_button_shape_color' => [
							'label' => __( 'Background Color', 'blocksy-companion' ),
							'type'  => 'ct-color-picker',
							'design' => 'block',
							'responsive' => true,
							'setting' => [ 'transport' => 'postMessage' ],
							'value' => [
								'default' => [
									'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
								],

								'hover' => [
									'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
								],
							],

							'pickers' => [
								[
									'title' => __( 'Initial', 'blocksy-companion' ),
									'id' => 'default',
									'inherit' => 'rgba(0, 0, 0, 0.5)'
								],

								[
									'title' => __( 'Hover', 'blocksy-companion' ),
									'id' => 'hover',
									'inherit' => 'rgba(0, 0, 0, 0.5)'
								],
							],
						],

					],
				],

				'filter_panel_close_button_icon_size' => [
					'label' => __( 'Icon Size', 'blocksy' ),
					'type' => 'ct-number',
					'design' => 'inline',
					'value' => 12,
					'min' => 5,
					'max' => 50,
					'divider' => 'top',
					'setting' => [ 'transport' => 'postMessage' ],
				],

				blocksy_rand_md5() => [
					'type' => 'ct-condition',
					'condition' => [ 'filter_panel_close_button_type' => '!type-1' ],
					'options' => [

						'filter_panel_close_button_border_radius' => [
							'label' => __( 'Border Radius', 'blocksy' ),
							'type' => 'ct-number',
							'design' => 'inline',
							'value' => 5,
							'min' => 0,
							'max' => 100,
							'divider' => 'top',
							'setting' => [ 'transport' => 'postMessage' ],
						],

					],
				],

				blocksy_rand_md5() => [
					'type' => 'ct-spacer',
					'height' => 50
				],

			],
		],

	],
];
