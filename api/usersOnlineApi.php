<?php
    include '../models/connectDatabaseModel.php';
    class usersOnlineApi
    {

        public function __construct()
        {
            $connectDB = new connectDatabaseModel();
            $queryDB = $connectDB->query("SELECT * FROM `users.on`");

            $queryDB->execute();
            $datas = $queryDB->fetchAll(PDO::FETCH_ASSOC);
            

            echo json_encode($datas);
        }
    }
    $usersApi = new usersOnlineApi();

