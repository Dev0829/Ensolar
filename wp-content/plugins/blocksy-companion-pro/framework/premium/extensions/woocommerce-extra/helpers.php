<?php

add_action('wp_ajax_blocsky_get_woo_quick_view', 'blocksy_get_woocommerce_quickview');
add_action('wp_ajax_nopriv_blocsky_get_woo_quick_view', 'blocksy_get_woocommerce_quickview');

function blocksy_get_woocommerce_quickview() {
	if (function_exists('YITH_Name_Your_Price_Frontend')) {
		YITH_Name_Your_Price_Frontend();
	}

	global $product;
	global $post;

	global $blocksy_is_quick_view;

	do_action('blocksy:content-blocks:display-hooks');

	$blocksy_is_quick_view = true;

	$product = wc_get_product(sanitize_text_field($_GET['product_id']));

	$variation = null;

	if (get_class($product) === 'WC_Product_Variation') {
		global $blocksy_current_variation;

		$variation = $product;
		$product = wc_get_product($variation->get_parent_id());

		$blocksy_current_variation = $variation;

		$permalink = $variation->get_permalink();

		parse_str(parse_url($permalink, PHP_URL_QUERY), $res);

		foreach ($res as $key => $val) {
			$_REQUEST[$key] = $val;
			$_GET[$key] = $val;
		}
	}

	$GLOBALS['product'] = $product;

	$id = $product->get_id();

	$post = get_post($id);

	if (! $product) {
		wp_send_json_error();
	}

	$is_in_stock = true;

	if (! $product->managing_stock() && ! $product->is_in_stock()) {
		$is_in_stock = false;
	}

	$content = ob_start();

	remove_filter(
		'woocommerce_post_class',
		'blocksy_woo_single_post_class',
		999,
		2
	);

	remove_action(
		'woocommerce_product_thumbnails',
		'woocommerce_show_product_thumbnails',
		20
	);
	
	?>

	<div id="quick-view-<?php echo esc_attr($id) ?>" data-behaviour="modal" class="ct-panel quick-view-modal">
		<div class="ct-panel-content">
			<div <?php wc_product_class('ct-container ct-quick-view-card single-product', $product->get_id()) ?>>

				<button class="ct-toggle-close" aria-label="<?php echo __('Close quick view', 'blocksy-companion') ?>">
					<svg class="ct-icon" width="12" height="12" viewBox="0 0 15 15">
						<path d="M1 15a1 1 0 01-.71-.29 1 1 0 010-1.41l5.8-5.8-5.8-5.8A1 1 0 011.7.29l5.8 5.8 5.8-5.8a1 1 0 011.41 1.41l-5.8 5.8 5.8 5.8a1 1 0 01-1.41 1.41l-5.8-5.8-5.8 5.8A1 1 0 011 15z"/>
					</svg>
				</button>

				<section>
					<?php woocommerce_show_product_images() ?>

					<div class="entry-summary">
						<?php
							do_action('blocksy:woocommerce:quick-view:title:before');
							woocommerce_template_single_title();
							do_action('blocksy:woocommerce:quick-view:title:after');

							do_action('blocksy:woocommerce:quick-view:price:before');
							woocommerce_template_single_price();
							do_action('blocksy:woocommerce:quick-view:price:after');

							do_action('blocksy:woocommerce:quick-view:summary:before');
							woocommerce_template_single_excerpt();
							do_action('blocksy:woocommerce:quick-view:summary:after');
							woocommerce_template_single_add_to_cart();
							woocommerce_template_single_meta()
						?>

						<a href="<?php echo get_permalink($variation ? $variation->get_id() : $product->get_id()) ?>" class="ct-button ct-quick-more">
							<?php echo __('Go to product page', 'blocksy-companion') ?>
						</a>
					</div>
				</section>
			</div>
		</div>
	</div>

	<?php

	ob_start();
	if (function_exists('wc_get_template')) {
		wc_get_template( 'single-product/add-to-cart/variation.php' );
	}
	$body_html = ob_get_clean();

	wp_send_json_success([
		'quickview' => ob_get_clean(),
		'body_html' => $body_html
	]);
}

function blocksy_quick_view_attr() {
	if (get_theme_mod('woocommerce_quickview_enabled', 'yes') !== 'yes') {
		return [];
	}

	if (get_theme_mod('woocommerce_quick_view_trigger', 'button') === 'button') {
		return [];
	}

	return [
		'data-quick-view' => get_theme_mod('woocommerce_quick_view_trigger', 'button')
	];
}

function blocksy_output_quick_view_link() {
    global $product;

	if (! $product) {
		return '';
	}

	$id = $product->get_id();

	if ( ! empty( trim($product->get_post_password() ) ) ) {
		return '';
	}

	$icon = apply_filters(
		'blocksy:ext:woocommerce-extra:quick-view:trigger:icon',
		'<svg width="14" height="14" viewBox="0 0 15 15"><title>'. __('Quick view icon', 'blocksy-companion') . '</title><path d="M7.5,5.5c-1.1,0-1.9,0.9-1.9,2s0.9,2,1.9,2s1.9-0.9,1.9-2S8.6,5.5,7.5,5.5z M14.7,6.9c-0.9-1.6-2.9-5.2-7.1-5.2S1.3,5.3,0.4,6.9L0,7.5l0.4,0.6c0.9,1.6,2.9,5.2,7.1,5.2s6.3-3.7,7.1-5.2L15,7.5L14.7,6.9zM7.5,11.8c-3.2,0-4.9-2.8-5.7-4.3C2.6,6,4.3,3.2,7.5,3.2s4.9,2.8,5.7,4.3C12.4,9,10.8,11.8,7.5,11.8z"/></svg>'
	);

	if (
		get_theme_mod('woocommerce_quickview_enabled', 'yes') === 'yes'
		&&
		get_theme_mod('woocommerce_quick_view_trigger', 'button') === 'button'
	) {
		return '<a href="#quick-view-' . $id . '" class="ct-open-quick-view ct-icon-container" aria-label="' . __('Quick view toggle', 'blocksy-companion') . '">' . $icon . '</a>';
	}

	return '';
}

function blc_get_woo_offcanvas_trigger() {
	$icons = [
		'type-1' => '<svg class="ct-icon" width="12" height="12" viewBox="0 0 10 10"><path d="M0 1.8c0-.4.3-.7.7-.7h8.6c.4 0 .7.3.7.7 0 .4-.3.7-.7.7H.7c-.4 0-.7-.3-.7-.7zm9.3 2.5H.7c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h8.6c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7zm0 3.2H.7c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h8.6c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7z"/></svg>',

		'type-2' => '<svg class="ct-icon" width="12" height="12" viewBox="0 0 10 10"><path d="M.7 1.1c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h8.6c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7H.7zm.9 3.2c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h6.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7H1.6zm.9 3.2c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-5z"/></svg>',

		'type-3' => '<svg class="ct-icon" width="12" height="12" viewBox="0 0 10 10"><path d="M10 1v1H5.4c-.2.6-.7 1-1.4 1s-1.2-.4-1.4-1H0V1h2.6c.2-.6.7-1 1.4-1s1.2.4 1.4 1H10zM6.5 3.5c-.7 0-1.2.4-1.4 1H0v1h5.1c.2.6.8 1 1.4 1 .7 0 1.2-.4 1.4-1H10v-1H7.9c-.2-.6-.7-1-1.4-1zM2.5 7c-.7 0-1.2.4-1.4 1H0v1h1.1c.2.6.8 1 1.4 1 .7 0 1.2-.4 1.4-1H10V8H3.9c-.2-.6-.7-1-1.4-1z"/></svg>',

		'type-4' => '<svg class="ct-icon" width="12" height="12" viewBox="0 0 10 10"><path d="M5.9 9.5h-.2l-1.8-.9c-.2-.1-.3-.2-.3-.4V5.4L.1 1.2C0 1.1 0 .9 0 .7.1.5.2.4.4.4h9.1c.2 0 .3.1.4.3s0 .3-.1.5L6.4 5.4v3.7c0 .2-.1.3-.2.4h-.3z"/></svg>'
	];

	$type = get_theme_mod('woocommerce_filter_type', 'type-1');

	if (empty($type)) {
		$type = 'type-1';
	}

	$class = 'ct-offcanvas-trigger ct-filter-trigger';

	$class .= ' ' . blocksy_visibility_classes(get_theme_mod(
		'woocommerce_filter_visibility',
		[
			'desktop' => true,
			'tablet' => true,
			'mobile' => true,
		]
	));

	return '<a class="' . $class . '" href="#woo-filters-panel">' . $icons[$type] . __('Filter', 'blocksy-companion') . '</a>';
}

function blc_woo_is_simple_product($p) {
	$is_simple = $p->is_type('simple');

	if (
		class_exists('WC_Price_Calculator_Product')
		&&
		\WC_Price_Calculator_Product::calculator_enabled($p)
	) {
		return [
			'value' => false,
			'fake_type' => 'variable'
		];
	}

	if (
		(
			class_exists('\SW_WAPF\Includes\Classes\Field_Groups')
			||
			class_exists('\SW_WAPF_PRO\Includes\Classes\Field_Groups')
		)
		&&
		! in_array($p->get_type(),['grouped','external'])
	) {
		if (class_exists('\SW_WAPF\Includes\Classes\Field_Groups')) {
			$field_groups = \SW_WAPF\Includes\Classes\Field_Groups::get_valid_field_groups('product');
		} else {
			global $product;
			$prev_p = $product;
			$product = $p;

			$field_groups = \SW_WAPF_PRO\Includes\Classes\Field_Groups::get_valid_field_groups('product');
			$product = $prev_p;
		}

		$product_field_group = get_post_meta(
			$p->get_id(),
			'_wapf_fieldgroup',
			true
		);

		if ($product_field_group) {
			if (class_exists('\SW_WAPF\Includes\Classes\Field_Groups')) {
				array_unshift(
					$field_groups,
					\SW_WAPF\Includes\Classes\Field_Groups::process_data(
						$product_field_group
					)
				);
			} else {
				array_unshift(
					$field_groups,
					\SW_WAPF_PRO\Includes\Classes\Field_Groups::process_data(
						$product_field_group
					)
				);
			}
		}

		if (! empty($field_groups)) {
			return [
				'value' => false,
				'fake_type' => 'variable'
			];
		}
	}

	return [
		'value' => $is_simple
	];
}
