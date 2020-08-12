<?php
/**
 * Created by PhpStorm.
 * Project :  alpha-elemenda.
 * User: hadie MacBook
 * Date: 04/06/20
 * Time: 03.08
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
while ( have_posts() ) : the_post();
?>
    <article id="post-<?php the_ID();?>" <?php post_class( 'site-content ' ); ?> role="main">
        <?php if ( apply_filters( 'alpha_elemenda_page_title', true ) ) : ?>
            <header class="page-header">
                <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
            </header>
        <?php endif; ?>
        <div class="page-content">
            <?php the_content(); ?>

            <?php wp_link_pages(); ?>
        </div>

        <?php comments_template(); ?>
    </article>
<?php
endwhile;
