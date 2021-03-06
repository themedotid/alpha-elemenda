<?php
/**
 * Created by PhpStorm.
 * Project :  alpha-elemenda.
 * User: hadie MacBook
 * Date: 04/06/20
 * Time: 03.01
 */
get_header();
$is_elemenda_theme_exist = function_exists( 'elemenda_theme_do_location' );


    ?>
<div class="elemenda site-wrapper  <?php echo is_active_sidebar('main-sidebar' )? 'has-sidebar':'';?>">


<main class="site-main" role="main">
    <div class="container ">

    <?php
if ( is_singular() ) {
    if ( ! $is_elemenda_theme_exist || ! elemenda_theme_do_location( 'single' ) ) {
        get_template_part( 'template-parts/single' );
    }
} elseif ( is_archive() || is_home() ) {
    if ( ! $is_elemenda_theme_exist || ! elemenda_theme_do_location( 'archive' ) ) {
        get_template_part( 'template-parts/archive' );
    }
} elseif ( is_search() ) {
    if ( ! $is_elemenda_theme_exist || ! elemenda_theme_do_location( 'search' ) ) {
        get_template_part( 'template-parts/search' );
    }
} else {
    if ( ! $is_elemenda_theme_exist || ! elemenda_theme_do_location( 'single' ) ) {
        get_template_part( 'template-parts/404' );
    }
}

?>
    <?php get_sidebar();?>

    </div>
</main>
</div><!--main-div-->

    <?php

get_footer();



