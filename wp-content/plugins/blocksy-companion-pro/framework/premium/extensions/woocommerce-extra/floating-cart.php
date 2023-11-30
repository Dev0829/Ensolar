<?php

$options = [
	'label' => __('Floating Cart', 'blocksy-companion'),
	'type' => 'ct-panel',
	'switch' => true,
	'value' => 'yes',
	'inner-options' => [

		blocksy_rand_md5() => [
			'title' => __( 'General', 'blocksy-companion' ),
			'type' => 'tab',
			'options' => [

				'floating_bar_position' => [
					'type' => 'ct-radio',
					'label' => __( 'Position', 'blocksy-companion' ),
					'view' => 'text',
					'design' => 'block',
					'responsive' => true,
					'setting' => [ 'transport' => 'postMessage' ],
					'value' => 'top',
					'choices' => [
						'top' => __( 'Top', 'blocksy-companion' ),
						'bottom' => __( 'Bottom', 'blocksy-companion' ),
					],
				],

				blocksy_rand_md5() => [
					'type' => 'ct-divider',
				],

				'floatingBarTitleVisibility' => [
					'label' => __('Product Title Visibility', 'blocksy-companion'),
					'type' => 'ct-visibility',
					'design' => 'block',
					'setting' => ['transport' => 'postMessage'],
					'allow_empty' => true,

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

				'floatingBarVisibility' => [
					'label' => __('Floating Cart Visibility', 'blocksy-companion'),
					'type' => 'ct-visibility',
					'design' => 'block',
					'setting' => ['transport' => 'postMessage'],
					'allow_empty' => true,

					'value' => [
						'desktop' => true,
						'tablet' => true,
						'mobile' => false,
					],

					'choices' => blocksy_ordered_keys([
						'desktop' => __( 'Desktop', 'blocksy-companion' ),
						'tablet' => __( 'Tablet', 'blocksy-companion' ),
						'mobile' => __( 'Mobile', 'blocksy-companion' ),
					]),
				],

			],
		],

		blocksy_rand_md5() => [
			'title' => __( 'Design', 'blocksy-companion' ),
			'type' => 'tab',
			'options' => [

				'floatingBarFontColor' => [
					'label' => __( 'Font Color', 'blocksy-companion' ),
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
							'inherit' => 'var(--color)'
						],
					],
				],

				'floatingBarBackground' => [
					'label' => __( 'Background Color', 'blocksy' ),
					'type' => 'ct-background',
					'design' => 'block:right',
					'responsive' => true,
					'divider' => 'top',
					'sync' => 'live',
					'value' => blocksy_background_default_value([
						'backgroundColor' => [
							'default' => [
								'color' => '#ffffff',
							],
						],
					])
				],

				'floatingBarShadow' => [
					'label' => __( 'Shadow', 'blocksy-companion' ),
					'type' => 'ct-box-shadow',
					'responsive' => true,
					'divider' => 'top',
					'value' => blc_call_fn(['fn' => 'blocksy_box_shadow_value'], [
						'enable' => true,
						'h_offset' => 0,
						'v_offset' => 10,
						'blur' => 20,
						'spread' => 0,
						'inset' => false,
						'color' => [
							'color' => 'rgba(44,62,80,0.15)',
						],
					]),
					'setting' => [ 'transport' => 'postMessage' ],
				],

			],
		],

	],
];

