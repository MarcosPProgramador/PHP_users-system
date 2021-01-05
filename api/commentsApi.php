<?php
require './tasksApi.php';


class commentsApi
{

    public function __construct()
    {

        $connectDB = tasksApi::Class('connectDatabaseModel');
        $querySelectComment = $connectDB->query("SELECT * FROM `comments`");
        $querySelectComment->execute();
        $datas = $querySelectComment->fetchAll(PDO::FETCH_ASSOC);


        if ($querySelectComment->rowCount())
            echo json_encode(array('status' => 'success', 'datas' => $datas));
        else  echo json_encode(array('status' => 'error', 'datas' => []));
    }
}
tasksApi::Class('commentsApi');
