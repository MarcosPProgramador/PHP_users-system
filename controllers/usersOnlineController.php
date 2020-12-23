<?php 

    class usersOnlineController
    {
        public function __construct() {
            $usersOnline = simpleTasks::Class('usersOnlineModel');
      

            $usersOnline->User();
        }
    }
    