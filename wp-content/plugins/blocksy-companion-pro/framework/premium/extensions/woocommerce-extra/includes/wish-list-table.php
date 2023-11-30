<?php

$wish_list = blc_get_ext('woocommerce-extra')->get_wish_list()->get_current_wish_list();

$has_custom_user = isset($_GET['wish_list_id']);

add_filter('wsa_sample_should_add_button', '__return_false');

if (class_exists('EPOFW_Front')) {
	$instance = EPOFW_Front::instance();

	remove_action(
		'woocommerce_before_add_to_cart_button',
		array(
			$instance,
			'epofw_before_add_to_cart_button',
		),
		10
	);

	remove_action(
		'woocommerce_after_add_to_cart_button',
		array($instance, 'epofw_after_add_to_cart_button'),
		10
	);
}

if (count($wish_list) > 0) {

?>
	<div class="ct-woocommerce-wishlist-table">
		<table class="shop_table">
			<thead>
				<tr>
					<th colspan="2"><?php esc_html_e( 'Product', 'blocksy-companion' ); ?></th>
					<th class="wishlist-product-actions"><?php esc_html_e( 'Add to cart', 'blocksy-companion' ); ?></th>
					<?php if (! $has_custom_user) { ?>
					<th class="wishlist-product-remove">&nbsp;</th>
					<?php } ?>
				</tr>
			</thead>

			<tbody>
				<?php

				foreach ($wish_list as $single_product_id) {
					$product = wc_get_product($single_product_id);

					$is_simple_product = blc_woo_is_simple_product($product);

					if (isset($is_simple_product['fake_type'])) {
						$product_classname = WC()
							->product_factory
							->get_product_classname(
								$single_product_id, 'variable'
							);

						try {
							$product = new $product_classname($single_product_id);
						} catch (Exception $e) {
						}
					}

					$GLOBALS['product'] = $product;

					if ($product && $product->exists()) {
						$product_permalink = $product->is_visible() ? $product->get_permalink() : '';

						$ajax_add_to_cart_id = 'has_wishlist_ajax_add_to_cart';

						$class = '';

						if (
							! $product->is_type('grouped')
							&&
							! $product->is_type('external')
							&&
							get_theme_mod($ajax_add_to_cart_id, 'no') === 'yes'
						) {
							$class .= 'class="ct-ajax-add-to-cart"';
						}

						?>
							<tr <?php echo $class ?>>
								<td class="wishlist-product-thumbnail">
									<?php
										$thumbnail = $product->get_image();

										if (! $product_permalink) {
											echo $thumbnail;
										} else {
											printf('<a href="%s" class="product-thumb">%s</a>', esc_url($product_permalink), $thumbnail);
										}
									?>
								</td>

								<td class="wishlist-product-name">
									<?php
										if (! $product_permalink) {
											echo wp_kses_post($product->get_name());
										} else {
											echo wp_kses_post(sprintf(
												'<a href="%s" class="product-name">%s</a>',
												esc_url($product_permalink),
												$product->get_name()
											));
										}

										$GLOBALS['product'] = wc_get_product($single_product_id);
										woocommerce_template_single_price();
										$GLOBALS['product'] = $product;
									?>

									<div class="product-mobile-actions ct-hidden-lg">
										<?php
											global $has_wish_list;
											$has_wish_list = true;

											if (blc_woo_is_simple_product($product)['value']) {
												woocommerce_template_single_add_to_cart();
											} else {
												woocommerce_template_loop_add_to_cart();
											}

											$has_wish_list = false;
										?>

										<?php if (! $has_custom_user) { ?>
											<a href="#wishlist-remove-<?php echo $single_product_id ?>" class="remove" data-id="<?php echo $single_product_id ?>" title="<?php echo __('Remove Product', 'blocksy-companion') ?>">
												<svg class="ct-icon" width="10px" height="10px" viewBox="0 0 24 24"><path d="M9.6,0l0,1.2H1.2v2.4h21.6V1.2h-8.4l0-1.2H9.6z M2.8,6l1.8,15.9C4.8,23.1,5.9,24,7.1,24h9.9c1.2,0,2.2-0.9,2.4-2.1L21.2,6H2.8z"></path></svg>
											</a>
										<?php } ?>
									</div>
								</td>

								<td class="wishlist-product-actions">
									<?php
										global $has_wish_list;
										$has_wish_list = true;

										if (blc_woo_is_simple_product($product)['value']) {
											woocommerce_template_single_add_to_cart();
										} else {
											woocommerce_template_loop_add_to_cart();
										}

										$has_wish_list = false;
									?>
								</td>

								<?php if (! $has_custom_user) { ?>
								<td class="wishlist-product-remove">
									<a href="#wishlist-remove-<?php echo $single_product_id ?>" class="remove" data-id="<?php echo $single_product_id ?>" title="<?php echo __('Remove Product', 'blocksy-companion') ?>">
										<svg class="ct-icon" width="10px" height="10px" viewBox="0 0 24 24"><path d="M9.6,0l0,1.2H1.2v2.4h21.6V1.2h-8.4l0-1.2H9.6z M2.8,6l1.8,15.9C4.8,23.1,5.9,24,7.1,24h9.9c1.2,0,2.2-0.9,2.4-2.1L21.2,6H2.8z"></path></svg>
									</a>
								</td>
								<?php } ?>
							</tr>
						<?php
					}
				}
				?>
			</tbody>
		</table>
	</div>

<?php
	if (
		get_theme_mod('product_wishlist_display_for', 'logged_users') === 'all_users'
		&&
		get_theme_mod('woocommerce_wish_list_page')
		&&
		is_user_logged_in()
		&&
		get_theme_mod('wish_list_has_share_box', 'no') === 'yes'
	) {
		echo blocksy_get_social_share_box([
			'html_atts' => [
				'data-type' => 'type-3'
			],
			'links_wrapper_attr' => [
				'data-icons-type' => 'simple'
			],
			'custom_share_url' => add_query_arg(
				'wish_list_id',
				get_current_user_id(),
				get_permalink(get_theme_mod('woocommerce_wish_list_page'))
			),
			'prefix' => 'wish_list'
		]);
	}

} else { ?>

	<div class="woocommerce-Message woocommerce-Message--info woocommerce-info"> 
		<a class="woocommerce-Button button" href="<?php echo esc_url( apply_filters( 'woocommerce_return_to_shop_redirect', wc_get_page_permalink( 'shop' ) ) ); ?>">
			<?php echo __('Browse products', 'blocksy-companion') ?>
		</a>

		<?php echo __("You don't have any products in your wish list yet.", 'blocksy-companion') ?>
	</div>

<?php } ?>