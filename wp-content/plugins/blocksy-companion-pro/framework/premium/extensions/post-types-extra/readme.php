<h2><?php echo __('Instructions', 'blocksy-companion'); ?></h2>

<p>
	<?php echo __('After activating this extension you will be able to enable the read progress bar for your single posts, add a featured image and set different colors to each taxonomy, add custom fields to your archive cards or page/post title section with the help of ACF, MetaBox and Toolset plugins, and also add taxonomies archive filters.', 'blocksy-companion') ?>
</p>

<div class="ct-modal-scroll">
	<ol class="ct-modal-list">
		<li>
			<h4><?php echo __('Custom Fields', 'blocksy-companion') ?></h4>
			<i>
			<?php
				echo sprintf(
					__('After setting up your custom fields you will be able to output them from %s or from %2s.', 'blocksy-companion'),
					sprintf(
						'<code>%s</code>',
						__('Customizer ➝ Blog Posts ➝ Card Options', 'blocksy-companion')
					),
					sprintf(
						'<code>%2s</code>',
						__('Customizer ➝ Single Posts ➝ Post Title', 'blocksy-companion')
					)
				);
			?>
			</i>
		</li>

		<li>
			<h4><?php echo __('Taxonomies Filters', 'blocksy-companion') ?></h4>
			<i>
			<?php
				echo sprintf(
					__('You can enable the taxonomies filters from %s.', 'blocksy-companion'),
					sprintf(
						'<code>%s</code>',
						__('Customizer ➝ Blog Posts ➝ Filters', 'blocksy-companion')
					)
				);
			?>
			</i>
		</li>

		<li>
			<h4><?php echo __('Read Progress Bar', 'blocksy-companion') ?></h4>
			<i>
			<?php
				echo sprintf(
					__('This options could be enabled from %s.', 'blocksy-companion'),
					sprintf(
						'<code>%s</code>',
						__('Customizer ➝ Single Posts ➝ Read Progress Bar', 'blocksy-companion')
					)
				);
			?>
			</i>
		</li>

		<li>
			<h4><?php echo __('Taxonomy Featured Image & Custom Colors', 'blocksy-companion') ?></h4>
			<i>
			<?php
				echo sprintf(
					__('To customize these options simply navigate to %s and edit one of your categories.', 'blocksy-companion'),
					sprintf(
						'<code>%s</code>',
						__('Dashboard ➝ Posts ➝ Categories', 'blocksy-companion')
					)
				);
			?>
			</i>
		</li>
	</ol>
</div>
