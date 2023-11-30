<?php

namespace Blocksy;

class ContentBlocksAdminUi {
	private $shortcode = 'blocksy-content-block';

	public function __construct() {
		add_filter('removable_query_args', function ($qs) {
			$qs[] = 'ct_enabled_hooks';
			$qs[] = 'ct_disabled_hooks';

			return $qs;
		});

		add_filter('bulk_actions-edit-ct_content_block', function ($bulk_actions) {
			$bulk_actions['ct_enable'] = __('Enable', 'blocksy-companion');
			$bulk_actions['ct_disable'] = __('Disable', 'blocksy-companion');

			return $bulk_actions;
		});

		add_filter('handle_bulk_actions-edit-ct_content_block', function ($redirect_to, $doaction, $post_ids) {
			if ($doaction === 'ct_enable') {
				foreach ($post_ids as $post_id) {
					$atts = blocksy_get_post_options($post_id);
					$atts['is_hook_enabled'] = 'yes';
					update_post_meta($post_id, 'blocksy_post_meta_options', $atts);
				}

				$redirect_to = add_query_arg(
					'ct_enabled_hooks',
					count($post_ids),
					$redirect_to
				);
			}

			if ($doaction === 'ct_disable') {
				foreach ($post_ids as $post_id) {
					$atts = blocksy_get_post_options($post_id);
					$atts['is_hook_enabled'] = 'no';
					update_post_meta($post_id, 'blocksy_post_meta_options', $atts);
				}

				$redirect_to = add_query_arg(
					'ct_disabled_hooks',
					count($post_ids),
					$redirect_to
				);
			}

			return $redirect_to;
		}, 10, 3);

		add_action('admin_notices', function () {
			if (! empty($_REQUEST['ct_enabled_hooks'])) {
				$count = intval($_REQUEST['ct_enabled_hooks']);

				echo blocksy_html_tag(
					'div',
					[
						'id' => 'message',
						'class' => 'updated notice is-dismissible'
					],
					blocksy_html_tag(
						'p',
						[],
						sprintf(
							_n(
								'Enabled %s content block.',
								'Enabled %s content blocks.',
								$count,
								'blocksy-companion'
							),
							$count
						)
					)
				);
			}

			if (! empty($_REQUEST['ct_disabled_hooks'])) {
				$count = intval($_REQUEST['ct_disabled_hooks']);

				echo blocksy_html_tag(
					'div',
					[
						'id' => 'message',
						'class' => 'updated notice is-dismissible'
					],
					blocksy_html_tag(
						'p',
						[],
						sprintf(
							_n(
								'Disabled %s content block.',
								'Disabled %s content blocks.',
								$count,
								'blocksy-companion'
							),
							$count
						)
					)
				);
			}

		});

		add_action(
			'restrict_manage_posts',
			function () {
				if (
					! isset($_GET['post_type'])
					||
					$_GET['post_type'] !== 'ct_content_block'
				) {
					return;
				}

				$values = [
					__('Custom Content/Hooks', 'blocksy-companion') => 'hook',
					__('Popup', 'blocksy-companion') => 'popup',
					__('404 Page', 'blocksy-companion') => '404',
					__('Header', 'blocksy-companion') => 'header',
					__('Footer', 'blocksy-companion') => 'footer',
					__('Archive', 'blocksy-companion') => 'archive',
					__('Single', 'blocksy-companion') => 'single',
				];

				echo '<select name="block_type">';

				echo '<option value="">' . __('All types', 'blocksy-companion') . '</option>';

				$current_v = isset($_GET['block_type']) ? $_GET['block_type'] : '';

				foreach ($values as $label => $value) {
					if ($value === '404') {
						echo '<optgroup label="Templates">';
					}

					printf(
						'<option value="%s"%s>%s</option>',
						$value,
						$value === $current_v ? ' selected="selected"' : '',
						$label
					);

					if ($value === 'single') {
						echo '</optgroup>';
					}
				}

				echo '</select>';
			}
		);

		add_action('pre_get_posts', function ($query) {
			if (
				! is_admin()
				||
				! $query->is_main_query()
				||
				! isset($query->query['post_type'])
				||
				$query->query['post_type'] !== 'ct_content_block'
				||
				! isset($_REQUEST['block_type'])
			) {
				return $query;
			}

			$screen = get_current_screen();

			if ($screen->id !== 'edit-ct_content_block' ) {
				return $query;
			}

			$slug = sanitize_text_field($_REQUEST['block_type']);

			if ($slug === 'all') {
				return $query;
			}

			if (empty($slug)) {
				return $query;
			}

			$query->query_vars['meta_query'] = [
				[
					'key' => 'template_type',
					'value' => $slug
				]
			];

			return $query;
		});

		add_filter('manage_ct_content_block_posts_columns', function ($columns) {
			$columns['template_type'] = __('Type', 'blocksy-companion');
			$columns['location'] = __('Location/Trigger', 'blocksy-companion');
			$columns['conditions'] = __('Conditions', 'blocksy-companion');
			$columns['shortcode'] = __('Output', 'blocksy-companion');
			$columns['actions'] = __('Enable/Disable', 'blocksy-companion');

			return $columns;
		});

		add_action(
			'manage_ct_content_block_posts_custom_column',
			function ($column, $post_id) {
				$template_type = get_post_meta($post_id, 'template_type', '');

				if (is_array($template_type) && isset($template_type[0])) {
					$template_type = $template_type[0];
				}

				$atts = blocksy_get_post_options($post_id);

				if ($column === 'location') {
					if ($template_type === 'popup') {
						$popup_trigger_condition = blocksy_akg(
							'popup_trigger_condition',
							$atts,
							'default'
						);

						$humanized_triggers = [
							'default' => __('None', 'blocksy-companion'),
							'scroll' => __('On scroll', 'blocksy-companion'),
							'element_reveal' => __('On scroll to element', 'blocksy-companion'),
							'page_load' => __('On page load', 'blocksy-companion'),
							'after_inactivity' => __('After inactivity', 'blocksy-companion'),
							'after_x_time' => __('After x time', 'blocksy-companion'),
							'after_x_pages' => __('After x pages', 'blocksy-companion'),
							'exit_intent' => __('On page exit intent', 'blocksy-companion'),
						];

						$humanized_direction = [
							'down' => __('Down', 'blocksy-companion'),
							'up' => __('Up', 'blocksy-companion')
						];

						$once_text = '';

						if (
							$popup_trigger_condition !== 'default'
							&&
							blocksy_akg('popup_trigger_once', $atts, 'no') === 'yes'
						) {
							$once_text = ', once';
						}

						if (isset($humanized_triggers[$popup_trigger_condition])) {
							echo $humanized_triggers[$popup_trigger_condition];

							if ($popup_trigger_condition === 'element_reveal') {
								$scroll_to_element = blocksy_akg(
									'scroll_to_element',
									$atts,
									''
								);

								if (! empty($scroll_to_element)) {
									echo ' (' . $scroll_to_element . $once_text . ')';
								}
							}

							if (
								$popup_trigger_condition === 'page_load'
								||
								$popup_trigger_condition === 'exit_intent'
							) {
								if (! empty($once_text)) {
									echo ' (' . trim(str_replace(',', '', $once_text)) . ')';
								}
							}

							if ($popup_trigger_condition === 'after_inactivity') {
								echo ' (' . blocksy_akg(
									'inactivity_value',
									$atts,
									'10'
								) . 's' . $once_text . ')';
							}

							if ($popup_trigger_condition === 'after_x_time') {
								echo ' (' . blocksy_akg(
									'x_time_value',
									$atts,
									'10'
								) . 's' . $once_text . ')';
							}

							if ($popup_trigger_condition === 'after_x_pages') {
								echo ' (' . blocksy_akg(
									'x_pages_value',
									$atts,
									'3'
								) . $once_text . ')';
							}

							if ($popup_trigger_condition === 'scroll') {
								echo ' (' . $humanized_direction[blocksy_akg(
									'scroll_direction',
									$atts,
									'down'
								)] . ' ' . blocksy_akg(
									'scroll_value',
									$atts,
									'200px'
								) . $once_text . ')';
							}
						}
					}

					if ($template_type === 'hook') {
						$locations = array_merge([
							[
								'location' => blocksy_default_akg('location', $atts, ''),
								'priority' => blocksy_default_akg('priority', $atts, '10'),
								'custom_location' => blocksy_default_akg('custom_location', $atts, ''),
								'paragraphs_count' => blocksy_default_akg('paragraphs_count', $atts, '5'),
								'headings_count' => blocksy_default_akg('headings_count', $atts, '5'),
							]
						], blocksy_default_akg('additional_locations', $atts, []));

						$hooks_manager = new HooksManager();

						echo implode(
							'<br>',
							$hooks_manager->humanize_locations($locations)
						);
					}
				}

				if ($column === 'conditions') {
					$conditions = blocksy_default_akg('conditions', $atts, []);

					$conditions_manager = new ConditionsManager();

					echo implode(
						'<br>',
						$conditions_manager->humanize_conditions($conditions)
					);
				}

				if ($column === 'shortcode') {
					if (is_array($template_type) && isset($template_type[0])) {
						$template_type = $template_type[0];
					}

					if ($template_type === 'hook' || $template_type === 'popup') {
						$shortcode_column_value = '[' . $this->shortcode . ' id="' . $post_id . '"]';

						if ($template_type === 'popup') {
							$shortcode_column_value = '#ct-popup-' . $post_id;
						}

						echo blocksy_html_tag(
							'input',
							[
								'class' => 'blocksy-shortcode',
								'type' => 'text',
								'readonly' => '',
								'onfocus' => 'this.select()',
								'value' => htmlspecialchars($shortcode_column_value)
							],
							false
						);
					}
				}

				if ($column === 'template_type') {
					$template_type = get_post_meta($post_id, 'template_type', '');

					if (is_array($template_type) && isset($template_type[0])) {
						echo ucfirst($template_type[0]);
					}
				}

				if ($column === 'actions') {
					$switch_class = 'ct-content-block-switch ct-option-switch';

					$atts = blocksy_get_post_options($post_id);

					if (blocksy_akg('is_hook_enabled', $atts, 'yes') === 'yes') {
						$switch_class .= ' ct-active';
					}

					$attr = [
						'class' => $switch_class,
						'data-post-id' => $post_id
					];

					echo '<div ' . blocksy_attr_to_html($attr) . '><span></div>';
				}
			}, 10, 2
		);

		add_action('wp_ajax_blocksy_content_blocksy_toggle', function () {
			if (! current_user_can('manage_options')) {
				wp_send_json_error();
			}

			if (! isset($_REQUEST['post_id'])) {
				wp_send_json_error();
			}

			if (! isset($_REQUEST['enabled'])) {
				wp_send_json_error();
			}

			$post_id = intval($_REQUEST['post_id']);
			$enabled = $_REQUEST['enabled'];

			if ($enabled !== 'yes' && $enabled !== 'no') {
				wp_send_json_error();
			}

			if (! $post_id) {
				wp_send_json_error();
			}

			$atts = blocksy_get_post_options($post_id);
			$atts['is_hook_enabled'] = $enabled;
			update_post_meta($post_id, 'blocksy_post_meta_options', $atts);

			wp_send_json_success([]);
		});
	}
}
