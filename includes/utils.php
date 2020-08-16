<?php
/**
 * Created by PhpStorm.
 * Project :  alpha-elemenda.
 * User: hadie MacBook
 * Date: 13/08/20
 * Time: 08.53
 */
namespace AlphaElemenda;

trait Utils{
    /**
     * Makes sure there's a valid meta order array.
     *
     * @param array $order meta order array.
     *
     * @return mixed
     */
    public function sanitize_order_array( $order ) {

        $allowed_order_values = apply_filters(
            'alpha_elemenda_meta_filter',
            array(
                'author'   => __( 'Author', 'alpha-elemenda' ),
                'category' => __( 'Category', 'alpha-elemenda' ),
                'date'     => __( 'Date', 'alpha-elemenda' ),
                'comments' => __( 'Comments', 'alpha-elemenda' ),
                'reading' => __( 'Reading', 'alpha-elemenda' ),
            )
        );
        foreach ( $order as $index => $value ) {
            if ( ! array_key_exists( $value, $allowed_order_values ) ) {
                unset( $order[ $index ] );
            }
        }

        return $order;
    }
}
