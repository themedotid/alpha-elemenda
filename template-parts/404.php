<?php
/**
 * Created by PhpStorm.
 * Project :  alpha-elemenda.
 * User: hadie MacBook
 * Date: 04/06/20
 * Time: 03.08
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
?>

    <?php if ( apply_filters( 'hello_elementor_page_title', true ) ) : ?>
        <header class="page-header">
            <h1 class="entry-title"><?php esc_html_e( 'The page can&rsquo;t be found.', 'hello-elementor' ); ?></h1>
        </header>
    <?php endif; ?>
    <div class="page-content">
        <p><?php esc_html_e( 'It looks like nothing was found at this location.', 'hello-elementor' ); ?></p>
    </div>


