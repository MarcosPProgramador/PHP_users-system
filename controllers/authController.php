<?php
class authController {

    public function authenticate() {
        return [
            'code' => 200,
            'datas'      => [
                [
                    'name' => 'marcos',
                ], [
                    'name' => 'pedro',
                ],
            ],
        ];
    }

}
