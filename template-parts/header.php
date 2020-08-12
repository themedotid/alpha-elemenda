<?php
/**
 * Created by PhpStorm.
 * Project :  alpha-elemenda.
 * User: hadie MacBook
 * Date: 12/08/20
 * Time: 04.03
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
$site_name = get_bloginfo( 'name' );
$tagline   = get_bloginfo( 'description', 'display' );
?>
<header class="site-header" role="banner">

    <div class="site-branding">
        <?php
        if ( has_custom_logo() ) {
            the_custom_logo();
        } elseif ( $site_name ) {
            ?>
            <h1 class="site-title">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php esc_attr_e( 'Home', 'alpha-elemenda' ); ?>" rel="home">
                    <?php echo esc_html( $site_name ); ?>
                </a>
            </h1>

                <?php
                if ( $tagline ) {
                    printf('<p class="site-description">%s</p>',esc_html($tagline));
                }
                ?>

        <?php } ?>
    </div>

    <?php if ( has_nav_menu( 'primary_menu' ) ) : ?>
        <nav class="site-navigation" role="navigation">
            <?php wp_nav_menu( array( 'theme_location' => 'primary_menu' ) ); ?>
        </nav>
    <?php endif; ?>
</header>
