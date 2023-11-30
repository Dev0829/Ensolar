<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package tenweb-website-builder-theme
 */

get_header();
if ( !defined('ELEMENTOR_VERSION') || !defined('TWBB_VERSION') ) {
  ?>

  <div id="primary" class="content-area">
    <main id="main" class="site-main">

      <?php
      while (have_posts()) :
        the_post();

        get_template_part('template-parts/content', 'page');

        // If comments are open or we have at least one comment, load up the comment template.
        if (comments_open() || get_comments_number()) :
          comments_template();
        endif;

      endwhile; // End of the loop.
      ?>

    </main><!-- #main -->
  </div><!-- #primary -->

  <?php
}
else {
  while (have_posts()) :
    the_post();
    // If there is no single template use this template with "Post content" widget.
    $data = [json_decode('{"id":"f201487","elType":"section","settings":[],"elements":[{"id":"12d00cc","elType":"column","settings":{"_column_size":100},"elements":[{"id":"2715dd8","elType":"widget","settings":[],"elements":[],"widgetType":"twbbpost-content"}],"isInner":false}],"isInner":false}', true)];
    $document = \Elementor\Plugin::$instance->documents->get_doc_for_frontend( get_the_ID() );
    if ($data != NULL) {
      $document->print_elements_with_wrapper( $data );
    }
  endwhile; // End of the loop.
}
get_footer();
