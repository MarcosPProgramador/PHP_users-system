<?php
    require './tasksApi.php';

    
    class usersOnlineApi
    {

        public function __construct()
        {
            $connectDB = tasksApi::Class('connectDatabaseModel');
            $queryDB = $connectDB->query("SELECT * FROM `users.on` ORDER BY id ASC");

            $queryDB->execute();
            $datas = $queryDB->fetchAll(PDO::FETCH_ASSOC);


            if ($queryDB->rowCount()) 
                echo json_encode(array('status'=> 'success', 'datas' => $datas));
            else throw new Exception('Not found');
        }
    }
    tasksApi::Class('usersOnlineApi');

