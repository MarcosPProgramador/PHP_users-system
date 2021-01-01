<?php
    require '../api/tasksApi.php';

    class usersOffAjax 
    {
        public function __construct()
        {   
            // session_start();
            // $name = $_SESSION['firstname'] ?? null;
            // $token = $_SESSION['token'] ?? null;
            // $date = date('Y-m-d H:i:s');
            
            $connectDB = tasksApi::Class('connectDatabaseModel');

            $query = '  INSERT INTO 
                            `users.off` 
                        SELECT 
                            name,
                            lastaction,
                            token 
                        FROM 
                            `users.on` 
                        WHERE
                            lastaction < NOW() - INTERVAL 1 MINUTE
            ';
                $queryInsertUserOff = $connectDB->query($query);
    
                $queryInsertUserOff->execute();
                
                // if ($queryInsertUserOff->rowCount()) 
                //     echo json_encode(array('status'=> 'success'));
                // else  echo json_encode(array('status'=> 'error'));

            
        }
    }
    tasksApi::Class('usersOffAjax');