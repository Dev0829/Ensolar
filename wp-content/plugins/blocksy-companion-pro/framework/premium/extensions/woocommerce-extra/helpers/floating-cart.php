<?php

function blocksy_woo_has_floating_cart() {
	if (! function_exists('is_woocommerce')) {
		return false;
	}

	global $product;

	global $post;

	if (is_string($product)) {
		$product = wc_get_product();
	}

	if (! is_product()) {
		return false;
	}

	if (
		! $product && $post
		||
		intval($product->get_id()) !== intval($post->ID)
	) {
		$product = wc_get_product($post->ID);
	}

	if (! $product) {
		return false;
	}

	if (
		(
			! $product->is_purchasable()
			||
			! $product->is_in_stock()
		)
		&&
		! $product->is_type('external')
	) {
		return false;
	}

	if (get_theme_mod('has_floating_bar', 'yes') !== 'yes') {
		return false;
	}

	return $product;
}

function blocksy_woo_floating_cart() {
	$product = blocksy_woo_has_floating_cart();

	if (! $product) {
		return '';
	}

	$image_output = '';

	if ($product && $product->get_image_id()) {
		$image_output = blc_call_fn(['fn' => 'blocksy_image'], [
			'attachment_id' => $product->get_image_id(),
			'size' => 'woocommerce_gallery_thumbnail',
			'ratio' => '1/1',
			'lazyload' => false,
			'tag_name' => 'div',
		]);
	}

	$class = 'ct-floating-bar';

	if (get_theme_mod('has_ajax_add_to_cart', 'no') === 'yes') {
		$class .= ' ct-ajax-add-to-cart';
	}

	$class .= ' ' . blocksy_visibility_classes(get_theme_mod('floatingBarVisibility',
		[
			'desktop' => true,
			'tablet' => true,
			'mobile' => false,
		]
	));

	$title_class = trim('ct-item-title ' . blocksy_visibility_classes(
		get_theme_mod(
			'floatingBarTitleVisibility',
			[
				'desktop' => true,
				'tablet' => true,
				'mobile' => true,
			]
		)
	));

	ob_start();

	?>
		<div class="<?php echo esc_attr($class) ?>">
			<div class="ct-container">
				<section class="floating-bar-content">
					<?php echo $image_output ?>
					<div>
						<?php the_title( '<div class="' . $title_class . '">', '</div>' ); ?>
						<?php woocommerce_template_single_price(); ?>
					</div>
				</section>

				<section class="floating-bar-actions">
					<?php
						woocommerce_template_single_price();


						if (blc_woo_is_simple_product($product)['value']) {
							global $wp_filter;
							global $blocksy_is_floating_cart;

							$blocksy_is_floating_cart = true;

							if (isset($wp_filter['woocommerce_before_add_to_cart_quantity'])) {
								$old_before = $wp_filter['woocommerce_before_add_to_cart_quantity'];
							}

							if (isset($wp_filter['woocommerce_after_add_to_cart_quantity'])) {
								$old = $wp_filter['woocommerce_after_add_to_cart_quantity'];
							}

							if (isset($wp_filter['woocommerce_before_add_to_cart_button'])) {
								$old_button = $wp_filter['woocommerce_before_add_to_cart_button'];
							}
							if (isset($wp_filter['woocommerce_before_add_to_cart_form'])) {
								$old_before_form = $wp_filter['woocommerce_before_add_to_cart_form'];
							}

							if (isset($wp_filter['woocommerce_after_add_to_cart_form'])) {
								$old_after_form = $wp_filter['woocommerce_after_add_to_cart_form'];
							}

							if (isset($wp_filter['woocommerce_after_add_to_cart_button'])) {
								$old_after_button = $wp_filter['woocommerce_after_add_to_cart_button'];
							}

							unset($wp_filter['woocommerce_before_add_to_cart_quantity']);
							unset($wp_filter['woocommerce_after_add_to_cart_quantity']);
							unset($wp_filter['woocommerce_before_add_to_cart_button']);
							unset($wp_filter['woocommerce_before_add_to_cart_form']);
							unset($wp_filter['woocommerce_after_add_to_cart_form']);
							unset($wp_filter['woocommerce_after_add_to_cart_button']);

							woocommerce_simple_add_to_cart();

							if (isset($old_before)) {
								$wp_filter['woocommerce_before_add_to_cart_quantity'] = $old_before;
							}

							if (isset($old)) {
								$wp_filter['woocommerce_after_add_to_cart_quantity'] = $old;
							}

							if (isset($old_button)) {
								$wp_filter['woocommerce_before_add_to_cart_button'] = $old_button;
							}

							if (isset($old_after_form)) {
								$wp_filter['woocommerce_after_add_to_cart_form'] = $old_after_form;
							}

							if (isset($old_before_form)) {
								$wp_filter['woocommerce_before_add_to_cart_form'] = $old_before_form;
							}

							if (isset($old_after_button)) {
								$wp_filter['woocommerce_after_add_to_cart_button'] = $old_after_button;
							}

							$blocksy_is_floating_cart = false;
						} else {
							$is_simple_product = blc_woo_is_simple_product($product);

							add_filter('wsa_sample_should_add_button', '__return_false');

							if (isset($is_simple_product['fake_type'])) {
								$product_classname = WC()
									->product_factory
									->get_product_classname(
										$product->get_id(), 'variable'
									);

								try {
									$GLOBALS['product'] = new $product_classname($product->get_id());
								} catch (Exception $e) {
								}
							}

							woocommerce_template_loop_add_to_cart();

							remove_filter('wsa_sample_should_add_button', '__return_false');

							$GLOBALS['product'] = $product;
						}
					?>
				</section>
			</div>
		</div>
	<?php

	return ob_get_clean();
}

