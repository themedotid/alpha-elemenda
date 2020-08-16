<?php
/**
 * Created by PhpStorm.
 * Project :  alpha-elemenda.
 * User: hadie MacBook
 * Date: 04/06/20
 * Time: 03.07
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
?>
<?php
while ( have_posts() ) : the_post();
    global $post;
    ?>

    <article id="post-<?php the_ID();?>" <?php post_class( 'site-content ' ); ?> role="main">
        <?php if ( apply_filters( 'hello_elementor_page_title', true ) ) : ?>
            <header class="page-header">
                <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
                <?php  do_action('alpha_elemenda_post_meta');?>
            </header>
        <?php endif; ?>
        <div class="page-content">
            <?php
            if(has_post_thumbnail($post)){
                printf('<a href="%s">%s</a>', esc_url(get_the_permalink()), get_the_post_thumbnail($post, 'large'));
            }
            the_content(); ?>
            <div class="post-tags">
                <?php the_tags( '<span class="tag-links">' . __( 'Tagged ', 'alpha-elemenda' ).'</span>', null, '' ); ?>
            </div>
            <?php wp_link_pages(); ?>
        </div>

        <?php comments_template(); ?>
    </article>

<?php
endwhile;
