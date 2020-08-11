<?php
/**
 * Created by PhpStorm.
 * Project :  alpha-elemenda.
 * User: hadie MacBook
 * Date: 04/06/20
 * Time: 03.01
 */

define( 'ALHPA_ELEMENDA_VERSION', '1.0.0' );
@ini_set('display_errors',1);
@ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

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

    }

}
add_action( 'after_setup_theme', 'alpha_elemenda_theme_setup' );

function alpha_elemenda_enqueue_styles(){
    $min_suffix          = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
    $min_suffix = '';
    wp_enqueue_style(
        'alpha-elemenda-style',
        get_template_directory_uri() . '/style' . $min_suffix . '.css',
        [],
        ALHPA_ELEMENDA_VERSION
    );
}
add_action( 'wp_enqueue_scripts', 'alpha_elemenda_enqueue_styles' );


function elemenda_body_opening(){
    if ( function_exists( 'wp_body_open' ) ) {
        wp_body_open();
    } else {
        do_action( 'wp_body_open' );
    }
}
