<?php
class routes {
    public function __construct() {

        $api = simpleTasks::Class('api');

        $this->authController($api);
    }

    private function authController(object $api) {
        $api::post('/auth', 'authController@authenticate');;
    }
}
