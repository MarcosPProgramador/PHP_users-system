<?php 

    class usersOnlineModel
    {
        public function User()
        {
            $currentTime = date('Y-m-d H:i:s');
            $connectDatabase = simpleTasks::Class('connectDatabaseModel');

      
            if (isset($_SESSION['online'])) {
                $this->deleteUsersOff($connectDatabase, $currentTime);
                $this->updateUsersOn($connectDatabase, $currentTime);
            }
            else {
                $this->insertUsersOn($connectDatabase, $currentTime);
                $this->deleteUsersOff($connectDatabase, $currentTime);
            }
        }
        public function updateUsersOn($connectDatabase, $currentTime)
        {
            $token =  $_SESSION['token']; 
   
            $query = "  UPDATE `users.on` 
                        SET `last.action` = ? 
                        WHERE `token` = ?
            ";
            $queryCheck = " SELECT id 
                            FROM `users.on`
                            WHERE token = ?
            ";


            $queryCheck = $connectDatabase->query($queryCheck);
            $queryCheck->execute([$token]);

            if ($queryCheck->rowCount()) {

                $queryUpdate = $connectDatabase->query($query);
                $queryUpdate->execute([$currentTime, $token]);
                
            }else  unset($_SESSION['online']);
            



        }
        public function insertUsersOn($connectDatabase, $currentTime)
        {
            $_SESSION['online'] = true;
            $_SESSION['token'] = uniqid();

            $token = $_SESSION['token'];
            $firstname = $_SESSION['firstname'];
            $ip = $_SERVER['REMOTE_ADDR'];

            $query = "  INSERT INTO `users.on` 

                        (firstname,
                        ip,
                        token,
                        `last.action`) 

                        VALUES (?,?,?,?)
            ";

            $queryInsert = $connectDatabase->query($query);

            $queryInsert->execute([
                $firstname,
                $ip,
                $token,
                $currentTime
            ]);


        }
        public function deleteUsersOff($connectDatabase, $currentTime)
        {   
            
            $query = '  DELETE FROM 
                        `users.on`
                        WHERE 
                        `last.action` < ? 
                        -
                        INTERVAL 1 MINUTE
            ';

            $queryDB = $connectDatabase->query($query);
            $queryDB->execute([$currentTime]);


          

        }
    }
    