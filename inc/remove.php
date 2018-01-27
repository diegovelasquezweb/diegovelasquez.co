<?php
//@remove adminBar
add_filter('show_admin_bar', '__return_false');
// add_action('after_setup_theme', 'remove_admin_bar');
// function remove_admin_bar() {
//   if (!current_user_can('administrator') && !is_admin()) {
//   show_admin_bar(false);
//   }
// }
//@Remove emojis
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );

//@remove jquery-migrate
add_action( 'wp_default_scripts', function( $scripts ) {
    if ( ! empty( $scripts->registered['jquery'] ) ) {
        $scripts->registered['jquery']->deps = array_diff( $scripts->registered['jquery']->deps, array( 'jquery-migrate' ) );
    }
} );

//@Remove favicon admin
function remove_styles_sections(){
    global $wp_customize;
    $wp_customize->remove_control('site_icon');
}
add_action( 'customize_register', 'remove_styles_sections', 20 );

//@Remove tags
function myprefix_unregister_tags() {
    unregister_taxonomy_for_object_type('post_tag', 'post');
}
add_action('init', 'myprefix_unregister_tags');

//@Remove comments
add_action( 'admin_init', 'my_remove_admin_menus' );
function my_remove_admin_menus() {
    remove_menu_page( 'edit-comments.php' );
}

//@Remove default post-type
add_action('admin_menu','remove_default_post_type');

function remove_default_post_type() {
	remove_menu_page('edit.php');
}
//@Remove default roles
remove_role( 'editor' );
remove_role( 'contributor' );
remove_role( 'author' );
remove_role( 'seoditor' );

// @Remove Yoast  roles
if ( get_role('wpseo_manager') ) {
  remove_role( 'wpseo_manager' );
}
if ( get_role('wpseo_editor') ) {
  remove_role( 'wpseo_editor' );
}
