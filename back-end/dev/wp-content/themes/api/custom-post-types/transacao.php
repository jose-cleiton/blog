<?php
function criar_post_type_transacao() {
  $labels = array(
    'name' => 'Transações',
    'singular_name' => 'Transação',
  );
  $args = array(
    'labels' => $labels,
    'public' => true,
    'has_archive' => true,
    'menu_icon' => 'dashicons-money',
    'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
  );
  register_post_type('transacao', $args);
}
add_action('init', 'criar_post_type_transacao');
?>
