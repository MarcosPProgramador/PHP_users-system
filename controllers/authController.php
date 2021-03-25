<?php
class authController {

    public function authenticate() {


        return [
            'code'  => 200,
            'datas' => [
                [
                    'name' => 'marco',
                ], [
                    'name' => 'pedro',
                ],
            ],
        ];
    }

}
