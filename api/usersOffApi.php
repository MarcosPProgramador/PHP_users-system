<?php

require './tasksApi.php';

class usersOffApi
{
    public function __construct()
    {
        session_start();

        $connect = tasksApi::Class('connectDatabaseModel');
        $queryUsersOn = $connect->query('SELECT * FROM `users.off`');


        $queryUsersOn->execute();
        $datas = $queryUsersOn->fetchAll(PDO::FETCH_ASSOC);

        if ($queryUsersOn->rowCount())
            echo json_encode(array('status' => 'success', 'datas' => $datas));
        else echo json_encode(array('status' => 'error', 'datas' => []));
    }
}
tasksApi::Class('usersOffApi');
