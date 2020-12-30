<?php
    require './tasksApi.php';

    class insertCommentsModel 
    {
        public function __construct()
        {   
            session_start();
            $comment = $_POST['comment'] ?? null;
            $name = $_SESSION['firstname'] ?? null;
            $email = $_SESSION['email'] ?? null;
            
            $connectDB = tasksApi::Class('connectDatabaseModel');

            try {
                $query = '  INSERT INTO comments 
                            (
                                name,
                                email,
                                comment,
                                lastaction
                            ) 
                            
                            VALUES 
                            (
                                ?,
                                ?,
                                ?,
                                ?
                            )
                
                ';

                $queryInsertComment = $connectDB->query($query);
                if($comment){
                    $queryInsertComment->execute([$name,$email, $comment, date('Y-m-d H:i:s')]);
                    
                    if ($queryInsertComment->rowCount()) 
                        echo json_encode(array('status'=> 'success', 'datas' => 'success'));
                    else  echo json_encode(array('status'=> 'error', 'datas' => 'error'));
                }
            } catch (\Throwable $th) {
                die('');
            }
        }
    }
    tasksApi::Class('insertCommentsModel');