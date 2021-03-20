<?php
class routes {
    public function __construct() {
        $api = simpleTasks::Class('api');

        $this->authController($api);
        $this->userController($api);
        $this->commentController($api);
    }

    private function commentController(object $api) {
        $api::get('/api/comments', "commentController@index");

    }

    private function userController(object $api) {
        $api::get('/api/users/online', 'onUserController@index');
        $api::get('/api/users/offline', 'offUserController@index');

    }

    private function authController(object $api) {
        $api::get('/auth', 'authController@authenticate');
    }
}
