<?php
class commentController {
    public function index() {
        $commentRepository = tasks::Class('commentRepository');
        return [
            'code'  => 200,
            'datas' => $commentRepository->findComments(),
        ];
    }
    public function store() {
    }
}
