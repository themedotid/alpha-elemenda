<?php
/**
 * Created by PhpStorm.
 * Project :  alpha-elemenda.
 * User: hadie MacBook
 * Date: 20/09/20
 * Time: 21.52
 */
get_header();


?>
    <div class="elemenda site-wrapper ">


        <main class="site-main" role="main">
            <div class="container ">
                <?php
                while ( have_posts() ) : the_post();
                    ?>
                    <?php the_content(); ?>
                <?php
                endwhile;

                ?>

            </div>
        </main>
    </div><!--main-div-->

<?php

get_footer();
