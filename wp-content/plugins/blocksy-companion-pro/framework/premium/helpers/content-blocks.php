<?php

if (! function_exists('blc_render_content_block')) {
	function blc_render_content_block($id, $args = []) {
		return \Blocksy\Plugin::instance()
			->premium
			->content_blocks
			->output_hook($id, $args);
	}
}

if (! function_exists('blc_get_content_block_that_matches')) {
	function blc_get_content_block_that_matches($args = []) {
		if (! function_exists('blocksy_get_post_options')) {
			return null;
		}

		$args = wp_parse_args($args, [
			'template_type' => 'hook',
			'template_subtype' => 'card',
			'match_conditions' => true,
			'match_conditions_strategy' => 'current-screen'
		]);

		$all_blocks = array_keys(blc_get_content_blocks([
			'template_type' => $args['template_type']
		]));

		foreach ($all_blocks as $block_id) {
			$values = blocksy_get_post_options($block_id);

			$conditions = blocksy_default_akg('conditions', $values, []);
			$default_template_subtype = 'card';

			if ($args['template_type'] === 'single') {
				$default_template_subtype = 'canvas';
			}

			$template_subtype = blocksy_default_akg(
				'template_subtype',
				$values,
				$default_template_subtype
			);

			if (
				! \Blocksy\Plugin::instance()
					->premium
					->content_blocks
					->is_hook_eligible_for_display(
						$block_id,
						[
							'match_conditions' => $args['match_conditions'],
							'match_conditions_strategy' => $args['match_conditions_strategy']
						]
					)
			) {
				continue;
			}

            /*
			if (blocksy_default_akg('is_hook_enabled', $values, 'yes') !== 'yes') {
				continue;
			}
             */

			if ($template_subtype !== $args['template_subtype']) {
				continue;
			}

			return $block_id;
		}

		return null;
	}
}

if (! function_exists('blc_get_content_blocks')) {
	function blc_get_content_blocks($args = []) {
		$args = wp_parse_args($args, [
			'template_type' => 'hook'
		]);

		$blocks = [];

		$all_items = get_posts([
			'post_type' => 'ct_content_block',
			'meta_key' => 'template_type',
			'meta_value' => $args['template_type'],
			'numberposts' => -1,
			'suppress_filters' => false
		]);

		if (is_array($all_items) && count($all_items)) {
			foreach($all_items as $row) {
				$blocks[$row->ID] = html_entity_decode(get_the_title($row->ID));
			}
		}

		return $blocks;
	}
}

if (! function_exists('blocksy_get_default_content_block')) {
	function blocksy_get_default_content_block($preferred = null, $args = []) {
		if (count(array_keys(blc_get_content_blocks($args))) === 0) {
			return null;
		}

		if ($preferred) {
			foreach (blc_get_content_blocks($args) as $id => $label) {
				if (strpos(
					strtolower($id),
					strtolower($preferred)
				) !== false) {
					return $id;
				}
			}
		}

		return array_keys(blc_get_content_blocks($args))[0];
	}
}
