<?php
class onUserController {
    public function index() {
        $userRepository = tasks::Class('userRepository');
        $onusers = $userRepository->findUsers();



        return [
            'code'  => 200,
            'datas' => $onusers,
        ];
    }

}
