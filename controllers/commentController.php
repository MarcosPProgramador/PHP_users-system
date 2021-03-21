<?php
class commentController {
    public function index() {
        return [
            'code'  => 200,
            'datas' => [
                [
                    'name'       => 'marcos',
                    'comment'    => 'lorem ipsum in dolor aliquid',
                    'lastaction' => '2021-01-05 15:11:03',
                ],
                [
                    'name'       => 'pedro',
                    'comment'    => 'lorem ipsum in dolor aliquid',
                    'lastaction' => '2021-01-05 15:11:03',
                ],
                [
                    'name'       => 'josé',
                    'comment'    => 'lorem ipsum in dolor aliquid',
                    'lastaction' => '2021-01-05 15:11:03',
                ],
                [
                    'name'       => 'joão',
                    'comment'    => 'lorem ipsum in dolor aliquid',
                    'lastaction' => '2021-01-05 15:11:03',
                ],
            ],
        ];
    }
}
