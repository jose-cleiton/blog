<?php

function api_usuario_post($request) {
    $response = array(
        'nome' => 'João',
        'email' => 'joao@example.com',
        'idade' => 30
    );
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
