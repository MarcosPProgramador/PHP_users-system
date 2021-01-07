<?php
class signUpController {
    public function __construct() {
        $this->signUpModel();
    }

    public function signUpModel() {
        $signUp = simpleTasks::Class('signUpModel');

        if (isset($_GET['action'])) {
            echo '<div class="fixed">';
            print_r($signUp->getFormData());
            echo '</div>';
            header('Location: login');
        }

    }

}
