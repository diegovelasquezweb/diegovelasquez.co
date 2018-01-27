<?php

//@Yoast Seo Support
add_theme_support( 'title-tag' );

add_filter( 'wpseo_metabox_prio', 'jw_filter_yoast_seo_metabox' );
function jw_filter_yoast_seo_metabox() {
	return 'low';
}

//@ACF Json Support
add_filter('acf/settings/load_json', 'my_acf_json_load_point');
function my_acf_json_load_point( $paths ) {
    unset($paths[0]);
    $paths[] = get_stylesheet_directory() . '/acf-json';
    return $paths;
}

//@Register menus
function register_menus() {
  register_nav_menus(
    array(
      'main-menu' => __( 'Main Menu' ),
      'footer-menu' => __( 'Footer Menu' ),
    )
  );
}
add_action( 'init', 'register_menus' );

//@Options page

if( function_exists('acf_add_options_sub_page') ) {
	$parent = acf_add_options_page(array(
		'page_title' 	=> 'Theme General Settings',
		'menu_title' 	=> 'Theme Options',
		'redirect' 		=> false,
		'position' 		=> 20,
    'icon' 			=> false,
	));
}


// @Adds a very minimal toolbar to TinyEMC WYSIWYG
add_filter( 'acf/fields/wysiwyg/toolbars' , 'my_toolbars'  );
function my_toolbars( $toolbars )
{
	$toolbars['Very  Simple' ] = array();
	$toolbars['Very Simple' ][1] = array('bold' , 'italic' , 'underline', 'link' );
	return $toolbars;
}

// @map
function my_acf_init() {
	acf_update_setting('google_api_key', 'AIzaSyA4Coudv9QkLgMgW5vlyePhA8Rh-MBn0Ng');
}
add_action('acf/init', 'my_acf_init');


//allow redirection, even if my theme starts to send output to the browser
add_action('init', 'do_output_buffer');
function do_output_buffer() {
        ob_start();
}

// @persoal details
function my_acf_user_form_func( $atts ) {

  $a = shortcode_atts( array(
    'field_group' => ''
  ), $atts );

  $uid = get_current_user_id();

  if ( ! empty ( $a['field_group'] ) && ! empty ( $uid ) ) {
    $options = array(
      'post_id' => 'user_'.$uid,
      'field_groups' => array( intval( $a['field_group'] ) ),
      'return' => add_query_arg( 'updated', 'true', get_permalink() )
    );

    ob_start();

    acf_form( $options );
    $form = ob_get_contents();

    ob_end_clean();
  }

    return $form;
}

add_shortcode( 'my_acf_user_form', 'my_acf_user_form_func' );
