<?php
function criar_post_type_produto() {
  $labels = array(
    'name' => 'Produtos',
    'singular_name' => 'Produto',
  );
  $args = array(
    'labels' => $labels,
    'public' => true,
    'has_archive' => true,
    'menu_icon' => 'dashicons-cart',
    'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
  );
  register_post_type('produto', $args);
}
add_action('init', 'criar_post_type_produto');
?>
