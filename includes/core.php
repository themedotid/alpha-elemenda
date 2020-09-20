<?php
/**
 * Created by PhpStorm.
 * Project :  alpha-elemenda.
 * User: hadie MacBook
 * Date: 13/08/20
 * Time: 08.23
 */
namespace AlphaElemenda;


class Core{
    use Post_Meta;
    use Utils;
    use Comments;
    use Page_templates;

    const VERSION = '1.0.0';

    private $settings;

    private static $is_active = true;


    private $customizer;




    /**
     * Alpha Elemenda Template with Header Only.
     */
    const TEMPLATE_HEADER = 'elemenda_template_header';

    /**
     * Alpha Elemenda Template with Footer Only.
     */
    const TEMPLATE_FOOTER = 'elemenda_template_footer';
    const TEMPLATE_CONTAINED = 'elemenda_template_contained';

    /**
     *  Alpha Elemenda  Header & Footer template name.
     */
    const TEMPLATE_HEADER_FOOTER = 'elemenda_header_footer';


    /**
     * Holds the instance of this class.
     *
     * @since   1.0.0
     * @access  private
     * @var Core $_instance
     */
    private static $_instance = null;


    public static function instance(){
        if ( is_null( self::$_instance ) ) {
            self::$_instance = new self();
            self::$_instance->init();
        }

        return self::$_instance;
    }

    /**
     * Initializes the class
     *
     * @since   1.0.0
     * @access  public
     */
    public function init(){
        add_action('alpha_elemenda_post_meta',array($this,'render_post_meta'));
        add_action( 'alpha_elemenda_do_comment_area', array( $this, 'render_comment_form' ) );
        add_filter( 'comment_form_defaults', array( $this, 'leave_reply_title_tag' ) );
        add_filter( 'get_search_form', array( $this, 'add_search_icon' ), PHP_INT_MAX );

        $this->page_template_init();
    }

    /**
     * Add
     *
     * @param string $markup search form markup.
     *
     * @return mixed
     */
    public function add_search_icon( $markup ) {
        $markup = str_replace( '</form>', '<div class="elt-search-icon-wrap">' . $this->get_search_icon() . '</div></form>', $markup );
        return $markup;
    }

    /**
     * Search Icon
     *
     * @param bool $is_link should be wrapped in A tag.
     * @param bool $echo should be echoed.
     * @param int  $size icon size.
     * @param bool $amp_ready Should we add the AMP binding.
     *
     * @return string
     */
   private function get_search_icon( $is_link = false, $echo = false, $size = 15, $amp_ready = false ) {

        $amp_state = '';
        if ( $amp_ready ) {
            $amp_state = 'on="tap:AMP.setState({visible: !visible})" role="button" tabindex="0" ';
        }
        $start_tag = $is_link ? 'a href="#"' : 'div';
        $end_tag   = $is_link ? 'a' : 'div';
        $svg       = '<' . $start_tag . ' class="elt-icon elt-search" ' . $amp_state . '>
				<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"/></svg>
			</' . $end_tag . '>';
        if ( $echo === false ) {
            return $svg;
        }
        echo $svg; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    }

}
