<?php
class offUserController {
    public function index() {
        return [
            'code'  => 200,
            'datas' => [
                [
                    'name'       => 'marcos',
                    'email'      => 'xxxxx@xxxx.xxx',
                    'lastaction' => '2021-01-05 15:11:03',
                ],
                [
                    'name'       => 'pedro',
                    'email'      => 'xxxxx@xxxx.xxx',
                    'lastaction' => '2021-01-05 15:11:03',
                ],
                [
                    'name'       => 'josé',
                    'email'      => 'xxxxx@xxxx.xxx',
                    'lastaction' => '2021-01-05 15:11:03',
                ],
                [
                    'name'       => 'joão',
                    'email'      => 'xxxxx@xxxx.xxx',
                    'lastaction' => '2021-01-05 15:11:03',
                ],
            ],
        ];
    }
}
