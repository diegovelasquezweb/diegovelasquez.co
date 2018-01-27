<?php function theme_assets() {
  wp_enqueue_style( 'styles', get_template_directory_uri() . '/assets/css/main.min.css', array(), '1.0.0', 'all' );
  wp_enqueue_script( 'scripts', get_template_directory_uri() . '/assets/js/libs.min.js', array('jquery'), '1.0.0', true );
  wp_enqueue_script( 'map', get_template_directory_uri() . '/assets/js/map.js', array('jquery'), '1.0.0', true );
  wp_enqueue_script( 'mainJs', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true );

}
add_action( 'wp_enqueue_scripts', 'theme_assets');
