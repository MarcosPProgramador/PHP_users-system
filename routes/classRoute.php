<?php 

    class classRoute
    {
        public function __construct() {
            
            switch (simpleTasks::Endpoint()) {
                case '/home':
                    if(isset($_SESSION['logged']))
                        simpleTasks::Class('usersController');
                    break;
                case '/login':
                        simpleTasks::Class('logInController');
                    break;
                case '/signup':
                        simpleTasks::Class('signUpController');
                    break;
                
            }
        }

    }
    