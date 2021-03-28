<?php
class routes {
    public function __construct() {
        $api = tasks::Class('api');

        $api::get('/api/comments', "commentController@index");
    
    
        $api::get('/api/users/online', 'onUserController@index');
        $api::get('/api/users/offline', 'offUserController@index');
    
    
        $api::get('/auth', 'authController@authenticate');
    }

}
