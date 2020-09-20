<?php
/**
 * Created by PhpStorm.
 * Project :  alpha-elemenda.
 * User: hadie MacBook
 * Date: 12/08/20
 * Time: 04.02
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
?>
<footer id="site-footer" class="site-footer" role="contentinfo">
	<div class="container">
         <?php echo sprintf('<div class="text-center">Copyright %1$s %2$s %3$s</div>'," &copy;",date('Y'),get_bloginfo('name'));?>
    </div>
</footer>
