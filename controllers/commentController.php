<?php
class commentController {
    public function index() {
        $commentRepository = tasks::Class('commentRepository');
        $comments = $commentRepository->findComments();
        
        return [
            'code'  => 200,
            'datas' => $comments,
        ];
    }

    public function store() {
    }
}
