<?php

$hooks_manager = new \Blocksy\HooksManager();

$choices = [];

$choices[] = [
	'key' => '',
	'value' => __('None', 'blocksy-companion')
];

foreach ($hooks_manager->get_all_hooks() as $hook) {
	$choices[] = array_merge([
		'key' => $hook['hook'],
		'value' => isset($hook['title']) ? $hook['title'] : $hook['hook']
	], isset($hook['group']) ? [
		'group' => $hook['group']
	] : []);
}

$choices[] = [
	'key' => 'custom_hook',
	'value' => __('Custom Hook', 'blocksy-companion'),
	'group' => __('Other', 'blocksy-companion')
];

$options = [
	[
		'has_inline_code_editor' => [
			// 'type' => 'ct-switch',
			'type' => 'hidden',
			'value' => 'no'
		],

		blocksy_rand_md5() => [
			'type' => 'ct-condition',
			'condition' => [ 'has_inline_code_editor' => 'no' ],
			'options' => [
				'has_content_block_structure' => [
					'label' => __( 'Container Structure', 'blocksy-companion' ),
					'type' => 'ct-switch',
					'value' => 'no',
					'design' => 'inline'
				],
			]
		],
	],

	[
		blocksy_rand_md5() => [
			'type' => 'ct-condition',
			'condition' => [
				'has_inline_code_editor' => 'no',
				'has_content_block_structure' => 'yes'
			],
			'options' => [
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
									'title' => __('Narrow Width', 'blocksy-companion'),
								],

								'type-4' => [
									'src' => blocksy_image_picker_url('normal.svg'),
									'title' => __('Normal Width', 'blocksy-companion'),
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
							'label' => __('Content Area Vertical Spacing', 'blocksy-companion'),
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
			]
		],


		blocksy_rand_md5() => [
			'type' => 'ct-condition',
			'condition' => [ 'has_inline_code_editor' => 'no' ],
			'options' => [
				blocksy_rand_md5() => [
					'type' => 'ct-divider',
				],
			]
		],
	],

	blocksy_rand_md5() => [
		'type' => 'ct-group',
		'label' => __( 'Location & Priority', 'blocksy-companion' ),
		'attr' => [ 'class' => 'ct-condition-location' ],
		'options' => [
			'location' => [
				'label' => false,
				'type' => 'blocksy-hooks-select',
				'value' => '',
				'design' => 'none',
				'defaultToFirstItem' => true,
				'choices' => $choices,
				'placeholder' => __('None', 'blocksy-companion'),
				'search' => true
			],

			'priority' => [
				'label' => false,
				'type' => 'ct-number',
				'value' => 10,
				'min' => 1,
				'max' => 100,
				'design' => 'none',
				'attr' => [ 'data-width' => 'full' ],
			],

		],

	],

	blocksy_rand_md5() => [
		'type' => 'ct-condition',
		'condition' => [ 'location' => 'custom_hook' ],
		'options' => [
			'custom_location' => [
				'label' => __('Custom Hook', 'blocksy-companion'),
				'type' => 'text',
				'value' => '',
				'divider' => 'bottom',
				'wrapperAttr' => [ 'data-location' => 'custom-hook' ],
			],
		]
	],

	blocksy_rand_md5() => [
		'type' => 'ct-condition',
		'condition' => [
			'location' => 'blocksy:single:content:paragraphs-number',
		],
		'options' => [
			'paragraphs_count' => [
				'label' => __('After Block Number', 'blocksy-companion'),
				'type' => 'text',
				'value' => '3',
				'design' => 'inline',
				'divider' => 'bottom',
				'wrapperAttr' => [ 'data-location' => 'block' ],
			],
		]
	],

	blocksy_rand_md5() => [
		'type' => 'ct-condition',
		'condition' => [
			'location' => 'blocksy:single:content:headings-number',
		],
		'options' => [
			'headings_count' => [
				'label' => __('Before Heading Number', 'blocksy-companion'),
				'type' => 'text',
				'value' => '3',
				'design' => 'inline',
				'divider' => 'bottom',
				'wrapperAttr' => [ 'data-location' => 'block' ],
			],
		]
	],

	'additional_locations' => [
		'type' => 'blocksy-multiple-locations-select',
		'choices' => $choices,
		'design' => 'none',
		'value' => []
	],

	blocksy_rand_md5() => [
		'type' => 'ct-divider',
	],

	'conditions' => [
		'label' => __('Display Conditions', 'blocksy-companion'),
		'type' => 'blocksy-display-condition',
		'sectionAttr' => [ 'class' => 'ct-content-blocks-conditions' ],
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

	'previewedPost' => [
		'label' => __( 'Dynamic Content Preview', 'blocksy-companion' ),
		'type' => 'blocksy-previewed-post',
		'value' => [
			'post_id' => '',
			'post_type' => 'post'
		],
		'desc' => __('Select a post/page to preview it\'s content inside the editor while building the hook.', 'blocksy-companion'),
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

	blocksy_rand_md5() => [
		'type' => 'ct-condition',
		'condition' => [ 'has_inline_code_editor' => 'no' ],
		'options' => [
			blocksy_rand_md5() => [
				'type' => 'ct-divider',
			],
			'content_block_position' => [
				'label' => __( 'Block Position', 'blocksy-companion' ),
				'type' => 'ct-radio',
				'value' => 'default',
				'view' => 'text',
				'design' => 'block',
				'choices' => [
					'default' => __( 'Default', 'blocksy-companion' ),
					'fixed' => __( 'Fixed', 'blocksy-companion' ),
				],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-condition',
				'condition' => [ 'content_block_position' => 'fixed' ],
				'options' => [

					'fixed_location' => [
						'label' => __( 'Location', 'blocksy-companion' ),
						'type' => 'ct-radio',
						'value' => 'bottom',
						'view' => 'text',
						'design' => 'block',
						'choices' => [
							'top' => __( 'Top', 'blocksy-companion' ),
							'bottom' => __( 'Bottom', 'blocksy-companion' ),
						],
					],

					'fixed_offset' => [
						'label' => [
							__( 'Top Offset', 'blocksy-companion' ) => [
								'fixed_location' => 'top',
							],

							__( 'Bottom Offset', 'blocksy-companion' ) => [
								'fixed_location' => 'bottom',
							]
						],
						'type' => 'ct-slider',
						'value' => '0px',
						'units' => blocksy_units_config([
							[ 'unit' => 'px', 'min' => 0, 'max' => 2000 ],
						]),
						'responsive' => true,
						'divider' => 'top',
					],
				],
			],

			blocksy_rand_md5() => [
				'type' => 'ct-divider',
			],
		]
	],

	blocksy_rand_md5() => [
		'type' => 'ct-condition',
		'condition' => [ 'has_inline_code_editor' => 'no' ],
		'options' => [
			'visibility' => [
				'label' => __( 'Visibility', 'blocksy-companion' ),
				'type' => 'ct-visibility',
				'design' => 'block',

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
		]
	],
];

