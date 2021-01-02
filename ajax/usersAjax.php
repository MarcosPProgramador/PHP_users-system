<?php
    require '../api/tasksApi.php';

    class usersAjax 
    {
        public function __construct()
        {   
            session_start();
            $this->name = $_SESSION['firstname'];
            $this->token = $_SESSION['token'];
            $this->date = date('Y-m-d H:i:s');
            
            $this->connectDB = tasksApi::Class('connectDatabaseModel');

     
            try {
                $this->insertUserOn();
                $this->deleteUserOnInUserOff();
                $this->insertUserOff();
                $this->deleteUserOffInUserOn();

            } catch (\Throwable $th) {
                $this->updateUserOn();
                $this->insertUserOff();
                $this->deleteUserOffInUserOn();
            }
            
        }
        public function insertUserOn()
        {
            $query = '  INSERT INTO `users.on` 
                        (
                            name,
                            token,
                            lastaction
                        ) 
                        
                        VALUES 
                        (
                            ?,
                            ?,
                            ?
                        )

            ';
            $queryInsertUserOn = $this->connectDB->query($query);
    
            $queryInsertUserOn->execute([  
                $this->name,
                $this->token,
                $this->date
            ]);
            
            if ($queryInsertUserOn->rowCount()) 
                echo json_encode(array('status'=> 'success'));
            else  echo json_encode(array('status'=> 'error'));
        }
        public function deleteUserOnInUserOff()
        {   
            $querydel = 'DELETE FROM 
                            `users.off` 
                            WHERE 
                            token = ?
            ';

            $queryDeleteUserRepeated = $this->connectDB->query($querydel);
            $queryDeleteUserRepeated->execute([$this->token]);
        }
        public function deleteUserOffInUserOn()
        {
            $querydel = '   DELETE FROM 
                                    
                            `users.on`

                            WHERE
                                lastaction < NOW() - INTERVAL 1 MINUTE 
                                AND
                                token != ?
                                
            ';

            $queryDeleteUserOn = $this->connectDB->query($querydel);
            $queryDeleteUserOn->execute([$this->token]);

        }
        public function updateUserOn()
        {
            $query = '  UPDATE 
                
                        `users.on`

                        SET
                            lastaction = NOW() 
                            
                        WHERE token = ?
                                
            ';


            $queryUpdateUserOn = $this->connectDB->query($query);
            $queryUpdateUserOn->execute([$this->token]);
                        
            if ($queryUpdateUserOn->rowCount()) 
                echo json_encode(array('status'=> 'success'));
            else  echo json_encode(array('status'=> 'error'));
        }
        public function insertUserOff()
        {
            try {
                $query = '  INSERT INTO 
                            `users.off` 
                            (
                                name,
                                lastaction,
                                token
                            )
                            SELECT 
                                name,
                                lastaction,
                                token 
                            FROM 
                                `users.on` 
                            WHERE
                                lastaction < NOW() - INTERVAL 1 MINUTE
                ';
                $queryInsertUserOff = $this->connectDB->query($query);

                $queryInsertUserOff->execute();

            } catch (\Throwable $th) {
               return;
            }

        }
    }
    tasksApi::Class('usersAjax');