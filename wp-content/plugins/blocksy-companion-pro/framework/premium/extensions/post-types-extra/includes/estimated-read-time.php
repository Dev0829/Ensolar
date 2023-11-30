<?php

class BlocksyAdvancedPostTypesEstimatedReadTime {
	public function __construct() {
		add_filter(
			'blocksy:options:meta:meta_elements',
			function ($layers, $prefix, $computed_cpt) {
				$layers['estimated_read_time'] = [
					'label' => __('Read Time', 'blocksy-companion'),
					'options' => [
						blocksy_rand_md5() => [
							'type' => 'ct-condition',
							'condition' => [ 'meta_type' => 'icons' ],
							'values_source' => 'parent',
							'options' => [
								'icon' => [
									'type' => 'icon-picker',
									'label' => __('Icon', 'blocksy-companion'),
									'design' => 'inline',
									'value' => [
										'icon' => 'blc blc-book'
									]
								]
							]
						],
					]
				];

				return $layers;
			},
			10, 3
		);

		add_filter(
			'blocksy:options:meta:meta_default_elements',
			function ($layers, $prefix, $computed_cpt) {
				$layers[] = [
					'id' => 'estimated_read_time',
					'enabled' => false
				];

				return $layers;
			},
			10, 3
		);

		add_action(
			'blocksy:post-meta:render-meta',
			[$this, 'render_read_time'],
			10, 3
		);
	}

	public function render_read_time($id, $meta, $args) {
		if ($id !== 'estimated_read_time') {
			return;
		}

		$value = $this->get_read_time();

		if (empty(trim($value))) {
			return;
		}

		if ($args['meta_type'] === 'label') {
			$value = '<span>' . __('Read Time', 'blocksy-companion') . '</span>' . $value;
		}

		if ($args['meta_type'] === 'icons' || $args['force_icons']) {
			$value = blc_get_icon([
				'icon_descriptor' => blocksy_akg('icon', $meta, [
					'icon' => 'blc blc-book'
				]),
				'icon_container' => false
			]) . $value;
		}

		echo blocksy_html_tag(
			'li',
			[
				'class' => 'meta-read-time'
			],
			$value
		);
	}

	public function get_read_time() {
		global $post;

		if (! $post) {
			return '';
		}

		if (! function_exists('blocksy_utf8_decode')) {
			return '';
		}

		$content = strip_tags(wp_encode_emoji(get_post_field('post_content', $post->ID)));

		$raw_chars_count = strlen(blocksy_utf8_decode(trim($content)));
		$multibyte_chars_count = strlen(trim($content)) - $raw_chars_count;

		if ($raw_chars_count === 0) {
			return '';
		}
		$percentage_of_multibyte_chars = 100 * $multibyte_chars_count / $raw_chars_count;


		$match_result = [];

		preg_match(
			'/^[\p{Latin}\p{Common}\p{Greek}\p{Cyrillic}\p{Georgian}\p{Old_Turkic}]+$/u',
			$content,
			$match_result
		);

		if (
			empty($match_result)
			&&
			$percentage_of_multibyte_chars > 30
			&&
			function_exists('mb_strlen')
		) {
			$word_count = mb_strlen(strip_tags($content));

		} else {
			// https://www.php.net/manual/en/function.str-word-count.php#107363
			$word_count = count(
				preg_split('~[^\p{L}\p{N}\']+~u', strip_tags($content))
			);
		}

		$image_count = substr_count($content, '<img');

		$reading_time = $word_count / 200;
		$image_time = ($image_count * 10) / 60;
		$total_time = round($reading_time + $image_time);

		return sprintf(
			_n('%s min', '%s mins', $total_time, 'blocksy-companion'),
			number_format_i18n($total_time)
		);
	}
}

