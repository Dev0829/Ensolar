<?php

$options = [
	'has_inline_code_editor' => [
		// 'type' => 'ct-switch',
		'type' => 'hidden',
		'value' => 'no'
	],

	'template_subtype' => [
		'label' => __( 'Replacement Behavior', 'blocksy-companion' ),
		'type' => 'ct-radio',
		'value' => 'canvas',
		'view' => 'text',
		'design' => 'block',
		'choices' => [
			'content' => __( 'Content Area', 'blocksy-companion' ),
			'canvas' => __( 'Full Page', 'blocksy-companion' ),
		]
	],

	blocksy_rand_md5() => [
		'type' => 'ct-condition',
		'condition' => [ 'template_subtype' => 'canvas' ],
		'options' => [

			blocksy_rand_md5() => [
				'type' => 'ct-title',
				'variation' => 'simple-small-heading',
				'label' => __( 'Page Structure', 'blocksy' ),
			],

			blocksy_rand_md5() => [
				'title' => __( 'General', 'blocksy' ),
				'type' => 'tab',
				'options' => [
					'content_block_structure' => [
						'label' => false,
						'type' => 'ct-image-picker',
						'value' => 'type-4',
						'choices' => [
							'type-3' => [
								'src' => blocksy_image_picker_url('narrow.svg'),
								'title' => __('Narrow Width', 'blocksy'),
							],

							'type-4' => [
								'src' => blocksy_image_picker_url('normal.svg'),
								'title' => __('Normal Width', 'blocksy'),
							],

							'type-2' => [
								'src' => blocksy_image_picker_url('left-single-sidebar.svg'),
								'title' => __('Left Sidebar', 'blocksy'),
							],

							'type-1' => [
								'src' => blocksy_image_picker_url('right-single-sidebar.svg'),
								'title' => __('Right Sidebar', 'blocksy'),
							],
						],
					],

					'content_style' => [
						'label' => __('Content Area Style', 'blocksy-companion'),
						'type' => 'ct-radio',
						'value' => 'wide',
						'view' => 'text',
						'design' => 'block',
						'divider' => 'top',
						'responsive' => true,
						'choices' => [
							'wide' => __( 'Wide', 'blocksy' ),
							'boxed' => __( 'Boxed', 'blocksy' ),
						],
					],

					'content_block_spacing' => [
						'label' => __('Content Area Vel Spacing', 'blocksy-companion'),
						'type' => 'ct-radio',
						'value' => 'both',
						'divider' => 'top',
						'view' => 'text',
						'design' => 'block',
						'disableRevertButton' => true,
						'attr' => [ 'data-type' => 'content-spacing' ],
						'setting' => [ 'transport' => 'postMessage' ],
						'choices' => [
							'both'   => '<span></span>
							<i class="ct-tooltip-top">' . __( 'Top & Bottom', 'blocksy-companion' ) . '</i>',

							'top'    => '<span></span>
							<i class="ct-tooltip-top">' . __( 'Only Top', 'blocksy-companion' ) . '</i>',

							'bottom' => '<span></span>
							<i class="ct-tooltip-top">' . __( 'Only Bottom', 'blocksy-companion' ) . '</i>',

							'none'   => '<span></span>
							<i class="ct-tooltip-top">' . __( 'Disabled', 'blocksy-companion' ) . '</i>',
						]
					],

				],
			],

			blocksy_rand_md5() => [
				'title' => __( 'Design', 'blocksy' ),
				'type' => 'tab',
				'options' => [

					blocksy_get_options('single-elements/structure-design', [
						// 'has_background' => false
					])

				]
			],

		],
	],

	blocksy_rand_md5() => [
		'type' => 'ct-divider',
	],

	'previewedPost' => [
		'label' => __( 'Dynamic Content Preview', 'blocksy-companion' ),
		'type' => 'blocksy-previewed-post',
		'value' => [
			'post_id' => '',
			'post_type' => 'post'
		],
		'desc' => __('Select a post/page to preview it\'s content inside the editor while building the post/page.', 'blocksy-companion'),
	],

	blocksy_rand_md5() => [
		'type' => 'ct-divider',
	],

	'conditions' => [
		'label' => __('Display Conditions', 'blocksy-companion'),
		'type' => 'blocksy-display-condition',
		'sectionAttr' => [ 'class' => 'ct-content-blocks-conditions' ],
		'filter' => 'singular',
		'value' => [
			[
				'type' => 'include',
				'rule' => 'singulars',
				'payload' => []
			]
		],

		'value' => [],
		'design' => 'block',
	],

	blocksy_rand_md5() => [
		'type' => 'ct-divider',
	],

	'has_content_block_expiration' => [
		'label' => __('Expiration Date/Time', 'blocksy-companion'),
		'type' => 'ct-switch',
		'value' => 'no',
		'design' => 'inline'
	],

	blocksy_rand_md5() => [
		'type' => 'ct-condition',
		'condition' => ['has_content_block_expiration' => 'yes'],
		'options' => [
			'expiration_date' => [
				'label' => false,
				'type' => 'date-time-picker',
				'value' => '',
				'disableRevertButton' => true,
			],
		]
	],
];
