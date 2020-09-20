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
wp_footer();
?>
</body>
</html>

