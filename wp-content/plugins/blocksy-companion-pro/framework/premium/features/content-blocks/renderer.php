<?php

namespace Blocksy;

class ContentBlocksRenderer {
	private $id = '';

	public function __construct($id) {
		$this->id = $id;
	}

	public function get_content() {
		$id = $this->id;

		$hook_post = get_post($id);

		$template_type = get_post_meta($id, 'template_type', true);

		if ($template_type === 'popup') {
			global $post;
			// $post = $hook_post;
			// setup_postdata($hook_post);
		}

		$atts = blocksy_get_post_options($id);

		if (! $hook_post) {
			return '';
		}

		if (blocksy_akg('has_inline_code_editor', $atts, 'no') === 'yes') {
			$blocks = parse_blocks($hook_post->post_content);

			if (empty($blocks)) {
				return '';
			}

			if (
				$blocks[0]['blockName'] !== 'core/code'
				&&
				$blocks[0]['blockName'] !== 'blocksy-companion-pro/code-editor'
			) {
				return '';
			}

			if ($blocks[0]['blockName'] === 'core/code') {
				$blocks[0]['blockName'] = 'blocksy-companion-pro/code-editor';
			}

			return render_block($blocks[0]);
		}

		if (
			class_exists('\Elementor\Plugin')
			&&
			\Elementor\Plugin::$instance->documents->get($id)
			&&
			\Elementor\Plugin::$instance->documents->get($id)->is_built_with_elementor()
		) {
			$switch = function () use ($id) {
				global $post;

				$template_type = get_post_meta($id, 'template_type', true);

				if ($template_type === 'single' || $template_type === 'archive') {
					\ElementorPro\Plugin::elementor()->documents->switch_to_document(
						\Elementor\Plugin::$instance->documents->get($post->ID)
					);
				}
			};

			add_action(
				'elementor/frontend/before_get_builder_content',
				$switch
			);

			global $blocksy_elementor_hook_was_rendered;
			$blocksy_elementor_hook_was_rendered = true;

			$result = \Elementor\Plugin::$instance
				->frontend
				->get_builder_content_for_display($id);

			remove_action(
				'elementor/frontend/before_get_builder_content',
				$switch
			);

			if ($template_type === 'popup') {
				// wp_reset_postdata();
			}

			return $result;
		}

		if (class_exists('\ZionBuilder\Plugin')) {
			$post_instance = \ZionBuilder\Plugin::instance()
				->post_manager
				->get_post_instance($id);

			if ($post_instance->is_built_with_zion()) {
				$result = \ZionBuilder\Plugin::instance()->renderer->get_content($id);

				if ($template_type === 'popup') {
					// wp_reset_postdata();
				}

				return $result;
			}
		}

		if (class_exists('Brizy_Editor')) {
			try {
				if (
					in_array(
						get_post_type($id),
						\Brizy_Editor::get()->supported_post_types()
					)
					&&
					\Brizy_Editor_Post::get($id)->uses_editor()
				) {
					$brizy = \Brizy_Editor_Post::get($hook_post->ID);

					$result = apply_filters(
						'brizy_content',
						do_shortcode($brizy->get_compiled_page()->get_body()),
						\Brizy_Editor_Project::get(),
						$brizy->getWpPost()
					);

					if ($template_type === 'popup') {
						// wp_reset_postdata();
					}

					return $result;
				}
			} catch (Exception $e) {
			}
		}

		global $wp_query;

		$old_is_singular = $wp_query->is_singular;
		$old_post_types = $wp_query->post_types;

		$wp_query->post_types = [];
		$wp_query->is_singular = true;

		$result = '';

		if (has_blocks($hook_post)) {
			$blocks = parse_blocks($hook_post->post_content);

			foreach ($blocks as $block) {
				$block['ct_hook_block'] = true;
				$result .= render_block($block);
			}
		} else {
			$result = wpautop($hook_post->post_content);
		}

		$wp_query->post_types = $old_post_types;
		$wp_query->is_singular = $old_is_singular;

		global $wp_embed;

		if ($wp_embed) {
			$result = $wp_embed->autoembed($result);
		}

		$result = do_shortcode(shortcode_unautop($result));

		if ($template_type === 'popup') {
			// wp_reset_postdata();
		}

		return $result;
	}

	public function pre_output() {
		$id = $this->id;

		$atts = blocksy_get_post_options($id);
		$template_type = get_post_meta($id, 'template_type', true);

		if ($template_type === 'popup') {
			add_action('wp_enqueue_scripts', function () {
				if (! function_exists('get_plugin_data')){
					require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
				}

				$data = get_plugin_data(BLOCKSY__FILE__);

				if (is_admin()) return;

				wp_enqueue_style(
					'blocksy-pro-popup-styles',
					BLOCKSY_URL . 'framework/premium/static/bundle/popups.min.css',
					['ct-main-styles'],
					$data['Version']
				);
			}, 50);
		}

		add_filter(
			'generateblocks_do_content',
			function ($content) use ($id) {
				$hook_post = get_post($id);
				return $content . $hook_post->post_content;
			}
		);

		if (
			function_exists('piotnetforms_shortcode')
			&&
			has_shortcode(get_post($id)->post_content, 'piotnetforms')
		) {
			add_action('wp_enqueue_scripts', function () {
				wp_enqueue_script('piotnetforms-script');
				wp_enqueue_style('piotnetforms-style');
			}, 15);
		}

		do_action('blocksy:pro:content-blocks:pre-output', $id);

		if (class_exists('\ZionBuilder\Plugin')) {
			$post_instance = \ZionBuilder\Plugin::instance()
				->post_manager
				->get_post_instance($id);

			if ($post_instance->is_built_with_zion()) {
				$post_template_data = $post_instance->get_template_data();

				\ZionBuilder\Plugin::instance()
					->renderer
					->register_area($id, $post_template_data);
			}
		}

		if (
			class_exists('\Elementor\Plugin')
			&&
			\Elementor\Plugin::$instance->documents->get($id)->is_built_with_elementor()
			&&
			! (
				isset($_POST['wp_customize_render_partials'])
				||
				wp_doing_ajax()
			)
		) {
			$document = \Elementor\Plugin::$instance->documents->get_doc_for_frontend(
				$id
			);


			// Change the current post, so widgets can use `documents->get_current`.
			\Elementor\Plugin::$instance->documents->switch_to_document($document);
			$data = $document->get_elements_data();
			$data = apply_filters('elementor/frontend/builder_content_data', $data, $id);

			add_action('wp_enqueue_scripts', function () {
				$f = \Elementor\Plugin::$instance
					->frontend;

				if ($f->has_elementor_in_page()) {
					return;
				}

				$f->enqueue_styles();

			});

            /*
			if (! empty($data)) {
				if ($document->is_autosave()) {
					$css_file = new \Elementor\Core\Files\CSS\Post_Preview(
						$document->get_post()->ID
					);
				} else {
					$css_file = new \Elementor\Core\Files\CSS\Post($id);
				}

				$css_file->enqueue();
			}
             */

			add_action(
				'wp_footer',
				function () use ($id) {
					// Preload fonts & icons links if the hook will be
					// generated dynamically via AJAX.
					global $blocksy_elementor_hook_was_rendered;

					if (! $blocksy_elementor_hook_was_rendered) {
						\Elementor\Plugin::$instance
							->frontend
							->get_builder_content_for_display($id);
					}

					$document = \Elementor\Plugin::$instance->documents->get_doc_for_frontend(
						$id
					);

					if ($document->is_autosave()) {
						$css_file = new \Elementor\Core\Files\CSS\Post_Preview(
							$document->get_post()->ID
						);
					} else {
						$css_file = new \Elementor\Core\Files\CSS\Post($id);
					}

					$css_file->print_css();

					$f = \Elementor\Plugin::$instance
						->frontend;

					if ($f->has_elementor_in_page()) {
						return;
					}

					$f->enqueue_styles();
					$f->enqueue_scripts();

					$f->print_fonts_links();
				}
			);
		}

		if (class_exists('Brizy_Editor')) {
			$this->handle_brizy_pre_output($id);
		}

		if ($template_type === 'popup') {
			add_action(
				'blocksy:global-dynamic-css:enqueue:inline',
				function ($args) use ($id) {
					$atts = blocksy_get_post_options($id);

					blocksy_theme_get_dynamic_styles(array_merge([
						'path' => dirname(__FILE__) . '/popup-dynamic-styles.php',
						'chunk' => 'hooks',
						'id' => $id,
						'atts' => $atts
					], $args));
				},
				10, 3
			);
		}

		add_action(
			'blocksy:global-dynamic-css:enqueue:inline',
			function ($args) use ($id) {
				$atts = blocksy_get_post_options($id);

				blocksy_theme_get_dynamic_styles(array_merge([
					'path' => dirname(__FILE__) . '/dynamic-styles.php',
					'chunk' => 'hooks',
					'id' => $id,
					'atts' => $atts
				], $args));
			},
			10, 3
		);
	}

	public function handle_brizy_pre_output($id) {
		if (
			!  in_array(
				get_post_type($id),
				\Brizy_Editor::get()->supported_post_types()
			) || ! \Brizy_Editor_Post::get($id)->uses_editor()
		) {
			return;
		}

		try {
			$brizy_post = \Brizy_Editor_Post::get($id);
		} catch (\Brizy_Editor_Exceptions_Exception | Exception $e) {
			return;
		}

		global $post;

		$post = get_post($id);

		setup_postdata($post);

		$is_preview = is_preview() || isset($_GET['preview']);
		$needs_compile = !$brizy_post->isCompiledWithCurrentVersion() || $brizy_post->get_needs_compile();
		$autosaveId = null;

		if ($is_preview) {
			$user_id = get_current_user_id();
			$postParentId = $brizy_post->getWpPostId();
			$autosaveId = \Brizy_Editor_AutoSaveAware::getAutoSavePost($postParentId, $user_id);

			if ($autosaveId) {
				$brizy_post = \Brizy_Editor_Post::get($autosaveId);
				$needs_compile = !$brizy_post->isCompiledWithCurrentVersion() || $brizy_post->get_needs_compile();
			} else {
				// we make this false because the page was saved.
				$is_preview = false;
			}
		}

		try {
			if ($is_preview || $needs_compile) {
				$brizy_post->compile_page();
			}

			if (!$is_preview && $needs_compile || $autosaveId) {
				$brizy_post->saveStorage();
				$brizy_post->savePost();
			}
		} catch (Exception $e) {
			\Brizy_Logger::instance()->exception($e);
		}

		try {
			if (
				in_array(get_post_type($id), \Brizy_Editor::get()->supported_post_types())
				&&
				\Brizy_Editor_Post::get($id)->uses_editor()
			) {
				$brizy_element = \Brizy_Editor_Post::get($id);

				$brizy_class = \Brizy_Public_Main::get($brizy_element);

				add_action('wp_head', array($brizy_class, 'insert_page_head'));

				add_action(
					'wp_enqueue_scripts',
					[$brizy_class, '_action_enqueue_preview_assets'],
					9999
				);

				add_filter(
					'body_class',
					function ($classes) {
						$classes[] = 'brz';
						$classes[] = ( function_exists( 'wp_is_mobile' ) && wp_is_mobile() ) ? 'brz-is-mobile' : '';

						return $classes;
					}
				);

				add_action('wp_head', function() use ($brizy_element) {
					$brizy_project = \Brizy_Editor_Project::get();

					$brizy_html = new \Brizy_Editor_CompiledHtml(
						$brizy_element->get_compiled_html()
					);

					echo apply_filters(
						'brizy_content',
						$brizy_html->get_head(),
						$brizy_project,
						$brizy_element->get_wp_post()
					);
				});
			}
		} catch (Exception $e) {
		}

		wp_reset_postdata();
	}
}

