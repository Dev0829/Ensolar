<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package tenweb-website-builder-theme
 */

?>

	</div><!-- #content -->

  <footer id="colophon" class="site-footer" role="contentinfo">
    <div class="wrap">
      <div class="footer_column footer_column1">
        <?php
        if ( is_active_sidebar( 'sidebar-2' ) ) { ?>
            <?php dynamic_sidebar( 'sidebar-2' ); ?>
        <?php } ?>
      </div>
      <div class="footer_column footer_column2">
        <?php
        if ( is_active_sidebar( 'sidebar-3' ) ) { ?>
            <?php dynamic_sidebar( 'sidebar-3' ); ?>
        <?php } ?>
        <!-- .widget-area -->
      </div>
      <div class="footer_column footer_column3">
        <?php
        if ( has_nav_menu( 'footer_menu' ) ) : ?>
          <nav class="social-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Footer Menu', 'tenweb-website-builder-theme' ); ?>">
            <?php
            wp_nav_menu( array(
                         'theme_location' => 'footer_menu',
                         'menu_class'     => 'footer_menu',
                        ) );
            ?>
          </nav><!-- .footer-navigation -->
        <?php endif; ?>

      </div>
    </div><!-- .wrap -->
  </footer><!-- #colophon -->
</div><!-- #page -->
<?php wp_footer(); ?>

</body>
</html>