<?php
/**
 * Created by PhpStorm.
 * Project :  alpha-elemenda.
 * User: hadie MacBook
 * Date: 04/06/20
 * Time: 03.10
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}
?>

<div class="archive-container  layout-grid">
<?php if (apply_filters('alpha_elemenda_page_title', true)) : ?>
    <?php
    if (!is_home() || !is_front_page()):?>
     <header class="page-header">
        <?php

        the_archive_title('<h1 class="entry-title">', '</h1>');
        the_archive_description('<p class="archive-description">', '</p>');
        ?>
    </header>
<?php endif; ?>
<?php endif; ?>
<div class="post-content elementor-grid-1">
    <div class="elementor-grid">


        <?php
        while (have_posts()) {
            the_post();
            global $post;
            $post_link = get_permalink();
            ?>
            <div id="post-<?php the_ID(); ?>" <?php post_class('site-content elementor-grid-item'); ?> role="main">
                <?php
                printf('<h2 class="%s"><a href="%s">%s</a></h2>', 'entry-title', esc_url($post_link), esc_html(get_the_title()));
                if(has_post_thumbnail($post)){
                    printf('<a href="%s">%s</a>', esc_url($post_link), get_the_post_thumbnail($post, 'large'));
                }
                do_action('alpha_elemenda_post_meta');
                printf('<div cass="post-excerpt">%s</div>',get_the_excerpt($post));
                ?>
            </div>
        <?php } ?>
    </div>
</div>

<?php wp_link_pages(); ?>

<?php
global $wp_query;
if ($wp_query->max_num_pages > 1) :
    ?>
    <nav class="pagination" role="navigation">
        <?php /* Translators: HTML arrow */ ?>
        <div class="nav-previous"><?php next_posts_link(sprintf(__('%s older', 'alpha-elemenda'), '<span class="meta-nav">&larr;</span>')); ?></div>
        <?php /* Translators: HTML arrow */ ?>
        <div class="nav-next"><?php previous_posts_link(sprintf(__('newer %s', 'alpha-elemenda'), '<span class="meta-nav">&rarr;</span>')); ?></div>
    </nav>
<?php endif; ?>

</div>
