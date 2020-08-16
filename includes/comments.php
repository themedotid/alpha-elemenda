<?php
/**
 * Created by PhpStorm.
 * Project :  alpha-elemenda.
 * User: hadie MacBook
 * Date: 13/08/20
 * Time: 10.06
 */
namespace AlphaElemenda;

trait Comments{
    public function render_comment_form() {
        if ( have_comments() ) { ?>
            <div class="nv-comments-title-wrap">
                <h2 class="comments-title">
                    <?php echo esc_html( $this->get_comments_title() ); ?>
                </h2>
            </div>

            <ol class="nv-comments-list">
                <?php
                wp_list_comments(
                    array(
                        'callback' => array( $this, 'comment_list_callback' ),
                        'style'    => 'ol',
                    )
                );
                ?>
            </ol>

            <?php
            $this->maybe_render_comments_navigation();
        }

        if ( ! comments_open() &&
            get_comments_number() &&
            post_type_supports( get_post_type(), 'comments' ) ) {
            ?>
            <p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'alpha-elemenda' ); ?></p>
            <?php
        }

        comment_form();
    }


    /**
     * Get the comments title.
     *
     * @return string
     */
    private function get_comments_title() {
        $comments_title =
            sprintf(
                esc_html(
                /* translators: number of comments */
                    _nx(
                        '%1$s thought on &ldquo;%2$s&rdquo;',
                        '%1$s thoughts on &ldquo;%2$s&rdquo;',
                        get_comments_number(),
                        'comments title',
                        'alpha-elemenda'
                    )
                ),
                number_format_i18n( get_comments_number() ),
                get_the_title()
            );

        return apply_filters( 'alpha_elemenda_filter_comments_title', $comments_title );
    }


    /**
     * Render comment navigation if needed
     *
     * @return void
     */
    private function maybe_render_comments_navigation() {
        if ( get_comment_pages_count() <= 1 || ! get_option( 'page_comments' ) ) {
            return;
        }

        $aria_label = __( 'Comments Navigation', 'alpha-elemenda' );
        ?>
        <nav class="elt-comment-navigation post-nav" role="navigation" aria-label="<?php echo esc_html( $aria_label ); ?>">
            <div class="nav-links">
                <div class="nav-previous">
                    <?php previous_comments_link( __( 'Previous', 'alpha-elemenda' ) ); ?>
                </div>
                <div class="nav-next">
                    <?php next_comments_link( __( 'Next', 'alpha-elemenda' ) ); ?>
                </div>
            </div>
        </nav>
        <?php
    }

    /**
     * Change reply title tag to h2.
     *
     * @param array $args comment form args.
     *
     * @return array
     */
    public function leave_reply_title_tag( $args ) {
        $args['title_reply_before'] = '<h3 id="reply-title" class="comment-reply-title">';
        $args['title_reply_after']  = '</h3>';

        return $args;
    }
}
