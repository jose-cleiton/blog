<?php

function api_usuario_post($request) {
    $args = array(
        'numberposts' => -1,
        'post_type' => 'post'
    );
    $posts = get_posts($args);
    $response = array();
    foreach ($posts as $post) {
        $response[] = array(
            'id' => $post->ID,
            'title' => $post->post_title,
            'content' => $post->post_content
        );
    }
    return rest_ensure_response($response);
}

function registrar_api_usuario_post(){
    register_rest_route('api', '/usuario', array(
        array(
            'methods' => 'GET',
            'callback' => 'api_usuario_post'
        )
    ));
}
add_action('rest_api_init', 'registrar_api_usuario_post');

?>
