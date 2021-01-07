<?php
class logInController {
    public function __construct() {

        if (isset($_SESSION['signup'])) {
            $this->logInModel();
        } else {
            header('Location: signup');
            exit();
        };
    }

    public function logInModel() {
        $logIn = simpleTasks::Class('logInModel');

        if (isset($_POST['action'])) {
            echo '<div class="fixed">';
            print_r($logIn->getFormData());
            echo '</div>';
            header('Location: home');
        }

    }

}
