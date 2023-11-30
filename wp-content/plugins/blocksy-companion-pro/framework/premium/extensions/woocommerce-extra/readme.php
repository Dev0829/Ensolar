<h2><?php echo __('Instructions', 'blocksy-companion'); ?></h2>

<p>
	<?php echo __('After installing and activating the WooCommerce Extra extension you will have these features:', 'blocksy-companion') ?>
</p>

<div class="ct-modal-scroll">
	<ol class="ct-modal-list">
		<li>
			<h4><?php echo __('Product Quick View', 'blocksy-companion') ?></h4>
			<i>
			<?php
				echo sprintf(
					__('Navigate to %s.', 'blocksy-companion'),
					sprintf(
						'<code>%s</code>',
						__('Customizer ➝ WooCommerce ➝ Product Archives ➝ Card Options ➝ Quick View', 'blocksy-companion')
					)
				);
			?>
			</i>
		</li>

		<li>
			<h4><?php echo __('Floating Cart', 'blocksy-companion') ?></h4>
			<i>
			<?php
				echo sprintf(
					__('Navigate to %s.', 'blocksy-companion'),
					sprintf(
						'<code>%s</code>',
						__('Customizer ➝ WooCommerce ➝ Single Product ➝ Floating Cart', 'blocksy-companion')
					)
				);
			?>
			</i>
		</li>

		<li>
			<h4><?php echo __('Advanced Gallery & Slider', 'blocksy-companion') ?></h4>
			<i>
			<?php
				echo sprintf(
					__('Navigate to %s.', 'blocksy-companion'),
					sprintf(
						'<code>%s</code>',
						__('Customizer ➝ WooCommerce ➝ Single Product ➝ Gallery Options', 'blocksy-companion')
					)
				);
			?>
			</i>
		</li>

		<li>
			<h4><?php echo __('Share Box', 'blocksy-companion') ?></h4>
			<i>
			<?php
				echo sprintf(
					__('Navigate to %s.', 'blocksy-companion'),
					sprintf(
						'<code>%s</code>',
						__('Customizer ➝ WooCommerce ➝ Single Product ➝ Share Box', 'blocksy-companion')
					)
				);
			?>
			</i>
		</li>

		<li>
			<h4><?php echo __('Wishlist', 'blocksy-companion') ?></h4>
			<i>
			<?php
				echo sprintf(
					__('Navigate to %s.', 'blocksy-companion'),
					sprintf(
						'<code>%s</code>',
						__('Customizer ➝ WooCommerce ➝ General ➝ Products Wishlist', 'blocksy-companion')
					)
				);
			?>
			</i>
		</li>
	</ol>
</div>
