<?php
/**
 * Created by PhpStorm.
 * Project :  alpha-elemenda.
 * User: hadie MacBook
 * Date: 12/08/20
 * Time: 10.21
 */

if (!is_active_sidebar('main-sidebar' )){
    return;
}
?>
<aside id="sidebar-primary" class="sidebar">
    <div class="sidebar-inner">
        <?php

        dynamic_sidebar( 'main-sidebar' ); ?>
    </div>
</aside>
