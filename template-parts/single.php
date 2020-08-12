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
    ?>

    <article id="post-<?php the_ID();?>" <?php post_class( 'site-content ' ); ?> role="main">
        <?php if ( apply_filters( 'hello_elementor_page_title', true ) ) : ?>
            <header class="page-header">
                <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
            </header>
        <?php endif; ?>
        <div class="page-content">
            <?php the_content(); ?>
            <div class="post-tags">
                <?php the_tags( '<span class="tag-links">' . __( 'Tagged ', 'alpha-elemenda' ), null, '</span>' ); ?>
            </div>
            <?php wp_link_pages(); ?>
        </div>

        <?php comments_template(); ?>
    </article>

<?php
endwhile;
