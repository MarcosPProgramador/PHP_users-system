<?php
    require '../api/tasksApi.php';

    class commentsAjax 
    {
        public function __construct()
        {   
            session_start();
            $comment = $_POST['comment'] ?? null;
            $name = $_SESSION['firstname'] ?? null;
            
            $connectDB = tasksApi::Class('connectDatabaseModel');

            $query = '  INSERT INTO comments 
                        (
                            name,
                            comment,
                            lastaction
                        ) 
                        
                        VALUES 
                        (
                            ?,
                            ?,
                            ?
                        )
            
            ';

            $queryInsertComment = $connectDB->query($query);
            if($comment){
                $queryInsertComment->execute([$name,$comment, date('Y-m-d H:i:s')]);
                
                if ($queryInsertComment->rowCount()) 
                    echo json_encode(array('status'=> 'success'));
                else  echo json_encode(array('status'=> 'error'));
            }
        }
    }
    tasksApi::Class('commentsAjax');