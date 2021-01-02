<?php

require './tasksApi.php';

class usersOnApi
{
    public function __construct() {
        session_start();

        $connect = tasksApi::Class('connectDatabaseModel');
        $queryUsersOn = $connect->query('SELECT * FROM `users.on`');


        $queryUsersOn->execute();
        $datas = $queryUsersOn->fetchAll(PDO::FETCH_ASSOC);
        if ($queryUsersOn->rowCount()) 
            echo json_encode(array('status'=> 'success', 'datas' => $datas));            
        else echo json_encode(array('status'=> 'success', 'datas' => []));
        

    }
}
tasksApi::Class('usersOnApi');