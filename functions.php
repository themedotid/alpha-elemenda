<?php
/**
 * Created by PhpStorm.
 * Project :  alpha-elemenda.
 * User: hadie MacBook
 * Date: 04/06/20
 * Time: 03.01
 */

define( 'ALPHA_ELEMENDA_VERSION', '1.0.0' );


if (!function_exists('alpha_elemenda_theme_setup')){
    function alpha_elemenda_theme_setup(){
        add_theme_support( 'post-thumbnails' );
        add_theme_support( 'automatic-feed-links' );
        add_theme_support( 'title-tag' );

        add_theme_support(
            'html5',
            array(
                'search-form',
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
            )
        );
        add_theme_support(
            'custom-logo',
            array(
                'height'      => 100,
                'width'       => 350,
                'flex-height' => true,
                'flex-width'  => true,
            )
        );

        register_nav_menus( array(
            'primary_menu' => __( 'Primary Menu', 'alpha-elemenda' ),
            'footer_menu'  => __( 'Footer Menu', 'alpha-elemenda' ),
        ) );

        register_sidebar(array(
            'name'          => __( 'Main Sidebar ' ) ,
            'id'            => "main-sidebar",
            'description'   => '',
            'class'         => '',
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget'  => "</div>",
            'before_title'  => '<p class="widget-title">',
            'after_title'   => "</p>",
        ));


        // WooCommerce in general.
        add_theme_support( 'woocommerce' );
        add_theme_support( 'elementor' );
        // Enabling WooCommerce product gallery features (are off by default since WC 3.0.0).
        // zoom.
        add_theme_support( 'wc-product-gallery-zoom' );
        // lightbox.
        add_theme_support( 'wc-product-gallery-lightbox' );
        // swipe.
        add_theme_support( 'wc-product-gallery-slider' );

    }

}
add_action( 'after_setup_theme', 'alpha_elemenda_theme_setup' );

function alpha_elemenda_enqueue_styles(){
    $min_suffix          = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
    $min_suffix = '';
    wp_enqueue_style( 'elementor-icons' );
    wp_enqueue_style( 'elementor-animations' );
    wp_enqueue_style( 'elementor-frontend' );
    wp_enqueue_style(
        'alpha-elemenda-style',
        get_template_directory_uri() . '/dist/css/theme.css',
        [],
        ALPHA_ELEMENDA_VERSION
    );

    wp_enqueue_script('alpha-elemenda',get_template_directory_uri() . '/dist/js/app.js',['jquery'],ALPHA_ELEMENDA_VERSION,true);
}
add_action( 'wp_enqueue_scripts', 'alpha_elemenda_enqueue_styles' );


function elemenda_body_opening(){
    if ( function_exists( 'wp_body_open' ) ) {
        wp_body_open();
    } else {
        do_action( 'wp_body_open' );
    }
}


if (!function_exists('alpha_elemenda_init_loader')){
    function alpha_elemenda_init_loader(){
        $vendor_file = trailingslashit( get_template_directory() ) . 'vendor/autoload.php';
        if ( is_readable( $vendor_file ) ) {
            require_once $vendor_file;
        }

        require_once 'autoloader.php';
        $autoloader = new \AlphaElemenda\Autoloader();
        $autoloader->add_namespace( 'AlphaElemenda', get_template_directory() . '/includes/' );
        $autoloader->register();

    }
    alpha_elemenda_init_loader();
    \AlphaElemenda\Core::instance();
}

