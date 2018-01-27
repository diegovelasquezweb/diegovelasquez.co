<?php
//@teachers custom post type
add_theme_support('post-thumbnails');
add_post_type_support( 'properties-post', 'thumbnail' );
function create_posttype() {
  //@properties
  register_post_type( 'properties-post',
  array(
    'labels' => array(
      'name' => __( 'Properties' ),
      'singular_name' => __( 'Property' )
    ),
    'public' => true,
    'has_archive' => true,
    'rewrite' => array('slug' => 'property'),
    'menu_position'  => 4,
    'menu_icon' => 'dashicons-admin-home'
  )
  );
  //@news
    add_post_type_support( 'news-post', 'thumbnail' );
    register_post_type( 'news-post',
    array(
      'labels' => array(
        'name' => __( 'News' ),
        'singular_name' => __( 'New' )
      ),
      'public' => true,
      'has_archive' => true,
      'rewrite' => array('slug' => 'news'),
      'menu_position'  => 4,
      'menu_icon' => 'dashicons-format-aside'
    )
  );
}
add_action( 'init', 'create_posttype' );
