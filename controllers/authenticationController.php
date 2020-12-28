<?php 
    class authenticationController
    {
        public function __construct() {
            $this->logInModel();
            $this->signUpModel();
        }
        public function logInModel()
        {
            simpleTasks::Class('logInModel');
        }
        public function signUpModel()
        {
            simpleTasks::Class('signUpModel');
        }
    }
    
