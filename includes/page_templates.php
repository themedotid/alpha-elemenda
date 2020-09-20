<?php
/**
 * Created by PhpStorm.
 * Project :  alpha-elemenda.
 * User: hadie MacBook
 * Date: 20/09/20
 * Time: 21.22
 */

namespace AlphaElemenda;



trait Page_templates
{

    public function page_template_init()
    {
        add_action('init', [$this, "add_wp_templates_support"]);

        add_filter('template_include', [$this, "template_include"], 11 /* After Plugins/WooCommerce */);

        add_filter("update_post_metadata", [$this, "filter_update_meta"], 10, 3);
    }


    public function add_wp_templates_support()
    {
        $post_types = get_post_types_by_support('elementor');

        foreach ($post_types as $post_type) {
            add_filter("theme_{$post_type}_templates", [$this, 'add_page_templates'], 10, 4);
        }
    }


    public function add_page_templates($page_templates, $wp_theme, $post)
    {
        if ($post && class_exists('\Elementor\Plugin')) {
            // FIX ME: Gutenberg not send $post as WP_Post object, just the post ID.
            $post_id = !empty($post->ID) ? $post->ID : $post;


            $document = \Elementor\Plugin::$instance->documents->get($post_id);
            if ($document && !$document::get_property('support_wp_page_templates')) {
                return $page_templates;
            }


        }

        $page_templates = [
                self::TEMPLATE_HEADER => _x('EL Template With Header', 'Page Template', 'alpha-elemenda'),
                self::TEMPLATE_FOOTER => _x('EL Template With Footer', 'Page Template', 'alpha-elemenda'),
                self::TEMPLATE_HEADER_FOOTER => _x('EL Template Full Width', 'Page Template', 'alpha-elemenda'),
                self::TEMPLATE_CONTAINED => _x('EL Template Boxed', 'Page Template', 'alpha-elemenda'),
            ] + $page_templates;

        return $page_templates;
    }


    public function filter_update_meta($check, $object_id, $meta_key)
    {

        if (class_exists('\Elementor\Plugin')) {
            if ('_wp_page_template' === $meta_key && \Elementor\Plugin::$instance->common) {
                /** @var \Elementor\Core\Common\Modules\Ajax\Module $ajax */
                $ajax = \Elementor\Plugin::$instance->common->get_component('ajax');

                $ajax_data = $ajax->get_current_action_data();

                $is_autosave_action = $ajax_data && 'save_builder' === $ajax_data['action'] && \Elementor\DB::STATUS_AUTOSAVE === $ajax_data['data']['status'];

                // Don't allow WP to update the parent page template.
                // (during `wp_update_post` from page-settings or save_plain_text).
                if ($is_autosave_action && !wp_is_post_autosave($object_id) && \Elementor\DB::STATUS_DRAFT !== get_post_status($object_id)) {
                    $check = false;
                }
            }
        }


        return $check;
    }

    public function template_include($template)
    {
        if (is_singular() && class_exists('\Elementor\Plugin')) {
            $document = \Elementor\Plugin::$instance->documents->get_doc_for_frontend(get_the_ID());

            if ($document) {
                $template_path = $this->get_template_path($document->get_meta('_wp_page_template'));

                if (!$template_path && $document->is_built_with_elementor()) {
                    $kit_default_template = \Elementor\Plugin::$instance->kits_manager->get_current_settings('default_page_template');
                    $template_path = $this->get_template_path($kit_default_template);
                }

                if ($template_path) {
                    $template = $template_path;

                    \Elementor\Plugin::$instance->inspector->add_log('Page Template', \Elementor\Plugin::$instance->inspector->parse_template_path($template), $document->get_edit_url());
                }
            }
        }

        return $template;
    }


    public function get_template_path($page_template)
    {
        $template_path = '';
        switch ($page_template) {
            case self::TEMPLATE_HEADER:
                $template_path = __DIR__ . '/templates/with-header.php';
                break;

            case self::TEMPLATE_FOOTER:
                $template_path = __DIR__ . '/templates/with-footer.php';
                break;
            case self::TEMPLATE_HEADER_FOOTER:
                $template_path = __DIR__ . '/templates/header-footer.php';
                break;
            case self::TEMPLATE_CONTAINED:
                $template_path = __DIR__.'/templates/contained.php';
                break;
        }

        return $template_path;
    }


}


