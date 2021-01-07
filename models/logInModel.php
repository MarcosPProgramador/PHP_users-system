<?php
class logInModel {
    public function getFormData() {

        $_SESSION['email'] = $_POST['email'];
        $_SESSION['token'] = uniqid();

        $_SESSION['logged'] = true;

        $email = $_POST['email'];
        $password = $_POST['password'];
        return [
            $email,
            $password,
        ];
    }
}
