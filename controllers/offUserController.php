<?php
class offUserController {
    public function index() {
        $userRepository = tasks::Class('userRepository');
        $offusers = $userRepository->findUsers();
        return [
            'code'  => 200,
            'datas' => $offusers,
        ];
    }
}
