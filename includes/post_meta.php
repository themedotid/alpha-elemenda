<?php
/**
 * Created by PhpStorm.
 * Project :  alpha-elemenda.
 * User: hadie MacBook
 * Date: 13/08/20
 * Time: 08.35
 */

namespace AlphaElemenda;


trait Post_Meta{

    public function render_post_meta(){
        $default_meta_order = wp_json_encode(
            array(
                'author',
                'date',
                'comments',
                'category',
                'reading',

            )
        );
        $order = get_theme_mod('alpha_elemenda_post_meta_ordering',$default_meta_order);
        $order = json_decode( $order );

        $order     = $this->sanitize_order_array( $order );

        $post_id       = get_the_ID();
        $post_type = get_post_type( $post_id );
        $as_list = true;
        $markup = '<div class="post-meta-list">';
        $markup    = $as_list === true ? '<ul class="post-meta-list">' : '<span class="post-meta-list elt-dynamic-meta">';
        $index     = 1;
        $tag       = $as_list === true ? 'li' : 'span';
        foreach ( $order as $meta ) {
            switch ( $meta ) {
                case 'author':
                    $markup .= sprintf('<%1$s class="meta author">%2$s</%1$s>',$tag,$this->_get_author_meta());
                    break;
                case 'date':
                    $markup .=sprintf('<%1$s class="meta date">%2$s</%1$s>',$tag,$this->_get_time_tags());
                    break;
                case 'category':
                    if ( $post_type !== 'post' ) {
                        break;
                    }
                    $markup .=sprintf('<%1$s class="meta category">%2$s</%1$s>',$tag,get_the_category_list( ', ', get_the_ID() ));

                    break;
                case 'comments':
                    $comments = self::_get_comments_count();
                    if ( empty( $comments ) ) {
                        break;
                    }
                    $markup .=sprintf('<%1$s class="meta comments">%2$s</%1$s>',$tag,$comments);

                    break;
                case 'reading':
                    $markup .=sprintf('<%1$s class="meta reading-time">%2$s</%1$s>',$tag,$this->_get_reading_time());

                    break;
                case 'default':
                default:
                    break;
            }
        }
        $markup    .= $as_list === true ? '</ul>' : '</div>';


        echo ( $markup ); //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    }


    /**
     * Get the author meta.
     *
     * @return string
     */
    public  function _get_author_meta() {
        $author_email   = get_the_author_meta( 'user_email' );
        $gravatar_args  = apply_filters(
            'alpha_elemenda_gravatar_args',
            array(
                'size' => 20,
            )
        );
        $display_avatar = apply_filters( 'alpha_elemenda_display_author_avatar', true );
        $avatar_url     = get_avatar_url( $author_email, $gravatar_args );
        $avatar_markup  = '<img class="photo" alt="' . get_the_author() . '" src="' . esc_url( $avatar_url ) . '" />&nbsp;';

        $markup = '';
        if ( $display_avatar ) {
            $markup .= $avatar_markup;
        }
        $markup .= '<span class="author-name fn">';
        if ( ! $display_avatar ) {
            $markup .= __( 'by', 'alpha-elemenda' ) . ' ';
        }
        $markup .= wp_kses_post( get_the_author_posts_link() ) . '</span>';

        return $markup;
    }

    public function _get_time_tags(){
        $created  = get_the_time( 'U' );
        $format   = get_option( 'date_format' );
        $modified = get_the_modified_time( 'U' );
        $time     = '<time class="entry-date published" datetime="' . esc_attr( date_i18n( 'c', $created ) ) . '" content="' . esc_attr( date_i18n( 'Y-m-d', $created ) ) . '">' . esc_html( date_i18n( $format, $created ) ) . '</time>';
        $time .= '<meta property="article:published_time"  content="' . esc_attr( date_i18n( 'c', $modified ) ) . '"/>';

        if ( $created === $modified ) {
            return $time;
        }
        $time .= '<meta property="article:modified_time"  content="' . esc_attr( date_i18n( 'c', $modified ) ) . '"/>';

        return $time;
    }

    /**
     * Get the comments with a link.
     *
     * @return string
     */
    public static function _get_comments_count() {
        if ( ! comments_open() ) {
            return '';
        }
        $comments_number = get_comments_number();
        if ( $comments_number < 1 ) {
            return '';
        }
        /* translators: %s: number of comments */
        $comments = sprintf( _n( '%s Comment', '%s Comments', $comments_number, 'alpha-elemenda' ), $comments_number );

        return '<a href="' . esc_url( get_comments_link() ) . '">' . esc_html( $comments ) . '</a>';
    }

    /**
     * Render the tags list.
     */
    public function _get_tags_list() {
        $tags = get_the_tags();
        if ( ! is_array( $tags ) ) {
            return;
        }
        $html  = '<div class="elt-tags-list">';
        $html .= '<span>' . __( 'Tags', 'alpha-elemenda' ) . ':</span>';
        foreach ( $tags as $tag ) {
            $tag_link = get_tag_link( $tag->term_id );
            $html    .= '<a href=' . esc_url( $tag_link ) . ' title="' . esc_attr( $tag->name ) . '" class=' . esc_attr( $tag->slug ) . ' rel="tag">';
            $html    .= esc_html( $tag->name ) . '</a>';
        }
        $html .= ' </div> ';
        echo $html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    }


    public function _get_reading_time(){
        $speed = 120;
        $post_id = get_the_ID();
        $content = get_the_content($post_id);
        $word = str_word_count(strip_tags($content));
        $minutes = floor($word / $speed);
        $seconds = floor($word % $speed / ($speed / 60));
        $est = $minutes . ' min' . ($minutes == 1 ? '' : 's') . ' ' . $seconds . ' sec' . ($seconds == 1 ? '' : 's');
         $time =  '00:'.$minutes .':' . $seconds ;

        if ( 1 <= $minutes ) {
            $estimated_time = $minutes . ' min' . ($minutes == 1 ? '' : 's') . ', ' . $seconds . ' sec' . ($seconds == 1 ? '' : 's');
        } else {
            $estimated_time = $seconds . ' sec' . ($seconds == 1 ? '' : 's');
        }

        return sprintf('<span class="time-to-read">%s %s</span>',$estimated_time,__('read','alpha-elemenda'));
    }
}
