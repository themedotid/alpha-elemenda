<?php
if ( ! defined( 'ABSPATH' ) ) {
exit; // Exit if accessed directly.
}

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <?php wp_head();?>
</head>
<body <?php body_class(); ?>>
<?php elemenda_body_opening();?>

<?php


if ( ! function_exists( 'elemenda_theme_do_location' ) || ! elemenda_theme_do_location( 'header' ) ) {
    get_template_part( 'template-parts/header' );
}



