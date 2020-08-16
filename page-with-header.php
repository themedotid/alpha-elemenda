<?php
/**
 * Template Name: Page with Header
 * Created by PhpStorm.
 * Project :  alpha-elemenda.
 * User: hadie MacBook
 * Date: 14/08/20
 * Time: 04.48
 */
get_header();
$is_elemenda_theme_exist = function_exists( 'elemenda_theme_do_location' );


if ( ! function_exists( 'elemenda_theme_do_location' ) || ! elemenda_theme_do_location( 'header' ) ) {
    get_template_part( 'template-parts/header' );
}

?>
<main class="site-main" role="main">
    <?php
    while ( have_posts() ) : the_post();
        ?>
        <?php the_content(); ?>
    <?php
    endwhile;

    ?>
</main>
<?php
get_footer();?>
