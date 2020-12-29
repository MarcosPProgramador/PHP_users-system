<?php 

    class signUpModel
    {
        public function isEmpty($formData)
        {
        }
        public function isRegularExpression($formData)
        {
        }
        public function isCountLimit($formData)
        {
        }
        public function getFormData()
        {

         
                $firstname = $_GET['firstname'];
                $lastname = $_GET['lastname'];
                $email = $_GET['email'];
                $password = $_GET['password'];
                $tel = $_GET['tel'];
                
                $_SESSION['firstname'] = $firstname;
                $_SESSION['signup'] = true;

                return [
                    $firstname,
                    $lastname,
                    $email,
                    $password,
                    $tel
                ];
                
            





        }

    }
    