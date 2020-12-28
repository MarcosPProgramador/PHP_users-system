<?php 
    class logInModel 
    {
        public function __construct() {
       

            $_SESSION['email'] = 'joao@gmail.com';
            $_SESSION['logged'] = true;
            $_SESSION['firstname'] = 'João';
            $_SESSION['token'] = uniqid(); 
            
        }
    }
    