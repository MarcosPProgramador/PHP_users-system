<?php 
    class logInModel 
    {
        public function __construct() {
            echo '<div class="fixed">';
                echo 'logInModel instânciada!';
            echo '</div>';



            $_SESSION['logged'] = true;
            $_SESSION['firstname'] = 'Marcos';
        }
    }
    