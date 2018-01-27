<?php
// @taxonomies
add_action( 'init', 'create_areas_hierarchical_taxonomy', 0 );

function create_areas_hierarchical_taxonomy() {
  $labels = array(
    'name' => _x( 'Areas', 'taxonomy general name' ),
    'singular_name' => _x( 'Areas', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Areas' ),
    'all_items' => __( 'All Areas' ),
    'parent_item' => __( 'Parent Areas' ),
    'parent_item_colon' => __( 'Parent Areas:' ),
    'edit_item' => __( 'Edit Areas' ),
    'update_item' => __( 'Update Areas' ),
    'add_new_item' => __( 'Add New Areas' ),
    'new_item_name' => __( 'New Type Areas' ),
    'menu_name' => __( 'Areas' ),
  );

  register_taxonomy('areas',array('post',  'portfolio-post'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'areas' ),
  ));

}


