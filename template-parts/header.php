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
<header class="header" role="banner">
    <a href="#content" class="elemenda-skip-link show-on-focus" tabindex="0">Skip to content</a>
   <div class="site-header elt-header">
       <nav class="elt-navbar navbar navbar-expand-md " role="navigation">
           <div class="header--row">
               <div class="container elementor-grid-2">
                   <div class="row grid elementor-grid">
                       <div class="header--item elementor-grid-item">
                           <div class="header--item-inner">
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
                           </div>
                       </div>
                       <?php if ( has_nav_menu( 'primary_menu' ) ) : ?>
                       <div class="header--item header--item-right elementor-grid-item">

                           <?php
                           echo wp_nav_menu(
                               [
                                   'theme_location' => 'primary_menu',
                                   'menu_id'        => 'elt-nav-menu',
                                   'depth'             => 2,
                                   'container'         => 'div',
                                   'container_class'   => 'collapse navbar-collapse site-navigation',
                                   'container_id'      => 'elt-nav-menu-collapse-1',
                                   'menu_class'        => 'nav navbar-nav',
                                   'walker'         => new \AlphaElemenda\Nav_Walker(),
                                   'fallback_cb'    => '\AlphaElemenda\Nav_Walker::fallback',
                                   'echo'           => false,
                               ]
                           );
                           ?>
                       </div>
                       <?php endif; ?>



                   </div>
               </div>
           </div>
       </nav>



   </div>
</header>
