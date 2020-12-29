<?php
    require './tasksApi.php';

    class insertCommentsModel 
    {
        public function __construct()
        {   
            $comment = $_GET['comment'] ?? null;
            $connectDB = tasksApi::Class('connectDatabaseModel');
            $queryInsertComment = $connectDB->query('INSERT INTO comments (lastaction,comment) VALUES (?,?)');
            if ($comment) {
                $queryInsertComment->execute([date('Y-m-d H:i:s'), $comment]);
                if ($queryInsertComment->rowCount()) 
                    echo json_encode(array('status'=> 'success', 'datas' => 'success send'));
                else  echo json_encode(array('status'=> 'error', 'datas' => 'not content 204'));
            }
        }
    }
    tasksApi::Class('insertCommentsModel');