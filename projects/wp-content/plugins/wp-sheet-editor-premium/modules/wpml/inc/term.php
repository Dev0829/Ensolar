<?php

if (!class_exists('WPSE_WPML_Term')) {

	class WPSE_WPML_Term {

		static private $instance = false;

		private function __construct() {
			
		}

		function init() {
			add_action('vg_sheet_editor/terms/taxonomy_edited', array($this, 'after_taxonomy_edited'), 10, 4);
			add_action('vg_sheet_editor/editor/before_init', array($this, 'register_columns'));
			// @todo probar
//			add_action('vg_sheet_editor/save_rows/after_saving_post', array($this, 'sync_translation_fields'), 10, 4);
//			add_action('vg_sheet_editor/formulas/execute_formula/after_execution_on_field', array($this, 'sync_translation_fields_after_formula'), 10, 6);
		}

		function sync_translation_fields_after_formula($term_id, $initial_data, $modified_data, $column, $formula, $taxonomy_key) {

			$this->sync_translation_fields($term_id, null, null, $taxonomy_key);
		}

		function sync_translation_fields($term_id, $item, $data, $taxonomy_key) {
			global $sitepress;
			if (!taxonomy_exists($taxonomy_key)) {
				return;
			}
			$term_actions = $sitepress->get_term_actions_helper();
			$term = get_term_by('term_id', $term_id, $taxonomy_key);
			$term_actions->sync_term_meta($term->term_id, $term->term_taxonomy_id);
		}

		private function _duplicate_term($term_id, $taxonomy, $lang) {
			global $wpdb, $sitepress;

			$term = get_term($term_id, $taxonomy);

			if (is_wp_error($term)) {
				return $term;
			}

			if ($term->parent) {
				$term_parent_trid = $sitepress->get_element_trid($term->parent, 'tax_' . $taxonomy);
				$translated_parent_id = $wpdb->get_var($wpdb->prepare("SELECT element_id FROM {$wpdb->prefix}icl_translations WHERE trid = %d AND language_code = %s LIMIT 1", $term_parent_trid, $lang));
			} else {
				$translated_parent_id = 0;
			}
			$new_term = wp_insert_term($term->name . ' (Copy)', $term->taxonomy, array(
				'description' => $term->description,
				'parent' => $translated_parent_id,
			));

			if (is_wp_error($new_term)) {
				return $new_term;
			}

			$sql = $wpdb->prepare(sprintf("INSERT INTO %s (`term_id`, `meta_key`, `meta_value`) SELECT %%d, `meta_key`, `meta_value`  FROM %s WHERE `term_id` = %%d", $wpdb->termmeta, $wpdb->termmeta), $new_term['term_id'], $term_id);
			$wpdb->query($sql);

			return get_term($new_term['term_id'], $taxonomy);
		}

		function duplicate_to_language($post_id, $cell_key, $data_to_save, $post_type, $cell_args, $spreadsheet_columns) {
			global $wpdb, $sitepress;

			$new_langs = array_filter(array_map('trim', explode(',', strtolower($data_to_save))));
			$existing_languages_for_term = $wpdb->get_col($wpdb->prepare("SELECT language_code FROM {$wpdb->prefix}icl_translations WHERE trid IN (SELECT trid FROM {$wpdb->prefix}icl_translations WHERE element_id = %d AND element_type = %s)", $post_id, 'tax_' . $post_type));
			$new_langs = array_diff($new_langs, $existing_languages_for_term);
			if (empty($new_langs)) {
				return;
			}
			$term_name = VGSE()->helpers->get_current_provider()->get_item_data($post_id, 'name');
			$element_type = "tax_" . esc_sql($post_type);
			$trid = $sitepress->get_element_trid($post_id, $element_type);
			foreach ($new_langs as $lang) {
				$sitepress->switch_lang($lang);
				$new_term = $this->_duplicate_term($post_id, $post_type, $lang);
				if (!$new_term) {
					continue;
				}
				$new_term_id = $new_term->term_id;
				$sitepress->set_element_language_details((int) $new_term_id, $element_type, $trid, $lang, $sitepress->get_default_language());
			}
			$sitepress->switch_lang(null);
		}

		function old_duplicate_to_language($post_id, $cell_key, $data_to_save, $post_type, $cell_args, $spreadsheet_columns) {
			global $wpdb, $sitepress, $wp_object_cache;

			$new_langs = array_filter(array_map('trim', explode(',', strtolower($data_to_save))));
			$existing_languages_for_term = $wpdb->get_col($wpdb->prepare("SELECT language_code FROM {$wpdb->prefix}icl_translations WHERE trid IN (SELECT trid FROM {$wpdb->prefix}icl_translations WHERE element_id = %d AND element_type = %s)", $post_id, 'tax_' . $post_type));
			$new_langs = array_diff($new_langs, $existing_languages_for_term);
			if (empty($new_langs)) {
				return;
			}
			$term_name = VGSE()->helpers->get_current_provider()->get_item_data($post_id, 'name');
			$element_type = "tax_" . esc_sql($post_type);
			$trid = $sitepress->get_element_trid($post_id, $element_type);
			foreach ($new_langs as $lang) {
				$new_term = $this->_duplicate_term($post_id, $post_type);
				if (!$new_term) {
					continue;
				}
				$new_term_id = $new_term->term_id;
				// If the new term has a parent, assign the translated parent
				if ($new_term->parent) {
					$term_parent_trid = $sitepress->get_element_trid($new_term->parent, 'tax_' . $post_type);
					$term_parent_lang = $sitepress->get_source_language_by_trid($term_parent_trid);

					if ($term_parent_lang !== $lang) {
						$translated_parent_id = $wpdb->get_var($wpdb->prepare("SELECT element_id FROM {$wpdb->prefix}icl_translations WHERE trid = %d AND language_code = %s LIMIT 1", $term_parent_trid, $lang));
						wp_update_term($new_term_id, $post_type, array('parent' => $translated_parent_id));
					}
				}
				$this->save_language_for_cell($new_term_id, $cell_key, $lang, $post_type);
				$this->update_translation_of_cell($new_term_id, $cell_key, $term_name, $post_type);

				$sitepress->set_element_language_details((int) $new_term_id, $element_type, $trid, $lang, $sitepress->get_default_language());
				clean_term_cache($new_term_id, $post_type);
				wp_cache_delete($new_term_id, $post_type . '_relationships');
			}
			wp_cache_delete('last_changed', 'terms');
			if (is_object($wp_object_cache)) {
				$wp_object_cache->flush();
			}
			wp_cache_set_terms_last_changed();
		}

		/**
		 * Register spreadsheet columns
		 */
		function register_columns($editor) {
			global $sitepress;
			if ($editor->provider->key === 'user') {
				return;
			}
			$post_types = $editor->args['enabled_post_types'];
			foreach ($post_types as $post_type) {
				if (!taxonomy_exists($post_type)) {
					continue;
				}
				if (!WP_Sheet_Editor_WPML_Obj()->is_the_default_language()) {
					$editor->args['columns']->register_item('icl_translation_of', $post_type, array(
						'data_type' => 'meta_data',
						'column_width' => 200,
						'title' => __('WPML - Translation of', 'vg_sheet_editor' ),
						'type' => '',
						'supports_formulas' => true,
						'supports_sql_formulas' => false,
						'allow_to_hide' => true,
						'allow_to_rename' => true,
						'allow_plain_text' => true,
						'get_value_callback' => array($this, 'get_translation_of_cell'),
						'save_value_callback' => array($this, 'update_translation_of_cell'),
					));
				} else {

					$editor->args['columns']->register_item('wpml_duplicate', $post_type, array(
						'data_type' => 'meta_data',
						'column_width' => 150,
						'title' => __('WPML - Duplicate', 'vg_sheet_editor' ),
						'type' => '',
						'supports_formulas' => true,
						'supports_sql_formulas' => false,
						'allow_to_hide' => true,
						'allow_to_rename' => true,
						'allow_plain_text' => true,
						'formatted' => array(
							'comment' => array('value' => __('Enter multiple language codes separated by commas and we will create copies of the main language. For example: en, es. Existing languages will be skipped.', 'vg_sheet_editor' ))
						),
						'save_value_callback' => array($this, 'duplicate_to_language'),
					));
				}
				$editor->args['columns']->register_item('wpml_language', $post_type, array(
					'data_type' => 'meta_data',
					'column_width' => 150,
					'title' => __('WPML - Language', 'vg_sheet_editor' ),
					'type' => '',
					'supports_formulas' => true,
					'supports_sql_formulas' => false,
					'allow_to_hide' => true,
					'allow_to_rename' => true,
					'allow_plain_text' => true,
					'allow_to_save' => true,
					'formatted' => array(
						'editor' => 'select',
						'selectOptions' => wp_list_pluck($sitepress->get_active_languages(), 'display_name', 'code')
					),
					'get_value_callback' => array($this, 'get_language_for_cell'),
					'save_value_callback' => array($this, 'save_language_for_cell'),
					'comment' => ( WP_Sheet_Editor_WPML_Obj()->is_the_default_language() ) ? null : array('value' => __('You can change the language of this post. If the translation for the new language exists, this change will not be applied.', 'vg_sheet_editor' )),
				));
			}
		}

		function get_language_for_cell($post, $cell_key, $cell_args) {
			global $wpdb;

			return $wpdb->get_var($wpdb->prepare("SELECT language_code FROM " . $wpdb->prefix . "icl_translations WHERE element_type = %s AND element_id = %d", 'tax_' . $post->post_type, $post->ID));
		}

		function save_language_for_cell($post_id, $cell_key, $data_to_save, $post_type, $cell_args = array(), $spreadsheet_columns = array()) {
			global $wpdb, $sitepress;

			$new_language = strtolower($data_to_save);
			if (!icl_is_language_active($data_to_save)) {
				return;
			}

			$translation_for_new_language_exists = (int) $wpdb->get_var($wpdb->prepare("SELECT COUNT(*) FROM " . $wpdb->prefix . "icl_translations WHERE language_code = %s AND element_type = %s AND element_id = %d ", $new_language, 'tax_' . $post_type, $post_id));
			if ($translation_for_new_language_exists) {
				return;
			}

			$args = array(
				'language_code' => $new_language,
				'source_language_code' => ( $new_language === $sitepress->get_default_language() ) ? null : $sitepress->get_default_language(),
			);

			$wpdb->update($wpdb->prefix . 'icl_translations', $args, array(
				'element_type' => 'tax_' . esc_sql($post_type),
				'element_id' => (int) $post_id
			));
		}

		function get_translation_of_cell($post, $cell_key, $cell_args) {
			global $sitepress;
			$main_id = (int) SitePress::get_original_element_id($post->ID, 'tax_' . $post->post_type);
			$value = '';

			if (!$main_id) {
				return $value;
			}

			$main_language = $sitepress->get_default_language();
			$current_language = $sitepress->get_current_language();
			if ($main_language !== $current_language) {
				$sitepress->switch_lang($main_language);
			}

			$value = VGSE()->helpers->get_current_provider()->get_item_data($main_id, 'name');

			if ($main_language !== $current_language) {
				$sitepress->switch_lang($current_language);
			}
			return $value;
		}

		function get_term_id_from_name($term_name, $taxonomy, $use_main_language = false) {
			global $sitepress;
			$term_id = null;
			$main_language = $sitepress->get_default_language();
			$current_language = $sitepress->get_current_language();
			if ($use_main_language && $main_language !== $current_language) {
				$sitepress->switch_lang($main_language);
			}
			// Try to find the parent by slug, if not found, find by hierarchical name
			$term_query = new WP_Term_Query();
			$terms = $term_query->query(array(
				'taxonomy' => $taxonomy,
				'fields' => 'ids',
				'number' => 1,
				'slug' => $term_name,
				'hide_empty' => false,
				'update_term_meta_cache' => false,
			));

			if (empty($terms)) {
				$term_query = new WP_Term_Query();
				$terms = $term_query->query(array(
					'taxonomy' => $taxonomy,
					'fields' => 'ids',
					'number' => 1,
					'name' => $term_name,
					'hide_empty' => false,
					'update_term_meta_cache' => false,
				));
			}

			if (!empty($terms)) {
				$term_id = (int) current($terms);
			}

			if ($use_main_language && $main_language !== $current_language) {
				$sitepress->switch_lang($current_language);
			}

			return $term_id;
		}

		function update_translation_of_cell($term_id, $cell_key, $data_to_save, $taxonomy, $cell_args = array(), $spreadsheet_columns = array()) {
			global $wpdb, $sitepress;
			$data_to_save = trim($data_to_save);
			if (empty($data_to_save)) {
				$wpdb->update(
						$wpdb->prefix . 'icl_translations', array(
					'source_language_code' => null,
					'language_code' => $sitepress->get_current_language()
						), array(
					'element_id' => $term_id,
					'element_type' => 'tax_' . esc_sql($taxonomy)
						), array('%s'), array('%d')
				);
				return;
			}

			$main_id = $this->get_term_id_from_name($data_to_save, $taxonomy, true);
			if (!$main_id) {
				return;
			}
			$element_type = "tax_" . esc_sql($taxonomy);
			$trid = $sitepress->get_element_trid($main_id, $element_type);

			$sitepress->set_element_language_details((int) $term_id, $element_type, $trid, $sitepress->get_current_language(), $sitepress->get_default_language());
		}

		function after_taxonomy_edited($term_id, $old_taxonomy, $new_taxonomy, $term) {
			global $wpdb;
			$wpdb->update(
					$wpdb->prefix . 'icl_translations', array(
				'element_type' => 'tax_' . $new_taxonomy
					), array(
				'element_id' => $term['term_taxonomy_id'],
				'element_type' => 'tax_' . $old_taxonomy
					), array('%s'), array('%d')
			);
		}

		/**
		 * Creates or returns an instance of this class.
		 */
		static function get_instance() {
			if (null == WPSE_WPML_Term::$instance) {
				WPSE_WPML_Term::$instance = new WPSE_WPML_Term();
				WPSE_WPML_Term::$instance->init();
			}
			return WPSE_WPML_Term::$instance;
		}

		function __set($name, $value) {
			$this->$name = $value;
		}

		function __get($name) {
			return $this->$name;
		}

	}

}

if (!function_exists('WPSE_WPML_Term_Obj')) {

	function WPSE_WPML_Term_Obj() {
		return WPSE_WPML_Term::get_instance();
	}

}
WPSE_WPML_Term_Obj();
