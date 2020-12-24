<?php
    require '../models/connectDatabaseModel.php';
    header('Content-type: application/JSON; charset=utf8');
    class usersOnlineApi
    {

        public function __construct()
        {
            $connectDB = new connectDatabaseModel();
            $queryDB = $connectDB->query("SELECT * FROM `users.on` ORDER BY id ASC");

            $queryDB->execute();
            $datas = $queryDB->fetchAll(PDO::FETCH_ASSOC);


            if ($queryDB->rowCount()) 
                echo json_encode(array('status'=> 'success', 'datas' => $datas));
            else throw new Exception('Not found');
        }
    }
    $usersApi = new usersOnlineApi();

