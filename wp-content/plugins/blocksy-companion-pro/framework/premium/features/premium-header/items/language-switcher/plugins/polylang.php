<?php

$list_class = 'class="ct-language"';

if ($ls_type === 'dropdown') {
	$list_class = '';

	echo '<div class="ct-language ct-active-language" tabindex="0">';

	$current_language = PLL()->curlang;

	if ($language_type['icon']) {
		echo $current_language->flag;
	}

	if ($language_type['label']) {
		echo '<span>';
		echo pll_current_language($language_label === 'long' ? 'name' : 'slug');
		echo '</span>';
	}

	if ($has_arrow) {
		echo '<svg class="ct-icon" width="8" height="8" viewBox="0 0 15 15"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path></svg>';
	}

	echo '</div>';
}

echo '<ul ' . $list_class . '>';

pll_the_languages([
	'show_flags' => $language_type['icon'],
	'show_names' => $language_type['label'],
	'display_names_as' => $language_label === 'long' ? 'name' : 'slug',
	'hide_if_empty' => false,
	'hide_current' => $hide_current_language
]);

echo '</ul>';