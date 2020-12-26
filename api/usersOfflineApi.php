<?php
    require './tasksApi.php';

    
    class usersOfflineApi
    {

        public function __construct()
        {
            $connectDB = tasksApi::Class('connectDatabaseModel');
            $queryDB = $connectDB->query("SELECT * FROM `users.off` ORDER BY id ASC");

            $queryDB->execute();
            $datas = $queryDB->fetchAll(PDO::FETCH_ASSOC);


            if ($queryDB->rowCount()) 
                echo json_encode(array('status'=> 'success','body' => 'users-off', 'datas' => $datas));
            else  echo json_encode(array('status'=> 'error','body' => 'users-off', 'datas' => 'not content 204'));
        }
    }
    tasksApi::Class('usersOfflineApi');

