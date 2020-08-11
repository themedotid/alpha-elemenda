<?php
/**
 * Created by PhpStorm.
 * Project :  alpha-elemenda.
 * User: hadie MacBook
 * Date: 04/06/20
 * Time: 03.01
 */
get_header();
$is_elemenda_theme_exist = false;

if (is_home() || is_front_page()){
    get_template_part('template-parts/homepage');
}elseif (is_singular()){
    get_template_part('template-parts/single');
} elseif (is_page()) {
    get_template_part('template-parts/page');
} elseif (is_archive()) {
    get_template_part('template-parts/archive');
}elseif (is_search()){
    get_template_part('template-parts/search');
}else{
    get_template_part('template-parts/404');
}

get_footer();



