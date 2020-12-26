<?php 

    class usersOnlineModel
    {
        public function User()
        {
            $currentTime = date('Y-m-d H:i:s');
            $connectDatabase = simpleTasks::Class('connectDatabaseModel');
            
            if (isset($_SESSION['logged'])) {
                if (isset($_SESSION['online'])) {
                    $this->deleteUsersOff($connectDatabase, $currentTime);
                    $this->updateUsersOn($connectDatabase, $currentTime);
                }
                else {
                    $this->insertUsersOn($connectDatabase, $currentTime);
                    $this->deleteUsersOff($connectDatabase, $currentTime);
                }
            }
      
        }
        public function updateUsersOn($connectDatabase, $currentTime)
        {
            $token =  $_SESSION['token']; 
   
            $query = "  UPDATE `users.on` 
                        SET currentTime = ? 
                        WHERE token = ?
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
            $name = $_SESSION['firstname'];
            $email = $_SESSION['email'];
            $ip = $_SERVER['REMOTE_ADDR'];

            $query = "  INSERT INTO `users.on` 

                        (name,
                        email,
                        token,
                        ip,
                        currentTime) 

                        VALUES (?,?,?,?,?)
            ";

       
       

            $queryInsert = $connectDatabase->query($query);

            $queryInsert->execute([
                $name,
                $email,
                $token,
                $ip,
                $currentTime
            ]);
            
            if ($queryInsert->rowCount()) {
                $this->deleteRepeatedUser($connectDatabase, $currentTime);
            }
        
           

        }
        public function insertUserOff($connectDatabase, $currentTime)
        {
            $_SESSION['token'] = uniqid();

            $token = $_SESSION['token'];
            $name = $_SESSION['firstname'];
            $email = $_SESSION['email'];
            $ip = $_SERVER['REMOTE_ADDR'];

            $query = "  INSERT INTO `users.off` 

                        (name,
                        email,
                        token,
                        ip,
                        currentTime) 

                        VALUES (?,?,?,?,?)
            ";





            $queryInsert = $connectDatabase->query($query);

            $queryInsert->execute([
                $name,
                $email,
                $token,
                $ip,
                $currentTime
            ]);
        }
        public function deleteRepeatedUser($connectDatabase)
        {

            $check = $connectDatabase->query("SELECT * FROM `users.off` A INNER JOIN `users.on` B  ON `A`.`email` = `B`.`email`");
            $check->execute();
            if ($check->rowCount()) {
                $check = $connectDatabase->query("DELETE FROM `users.off` WHERE email = ?");
                $check->execute([$_SESSION['email']]);
            }
        }
        public function deleteUsersOff($connectDatabase, $currentTime)
        {   
            $deleteUserOff = '  DELETE FROM `users.on`
                                WHERE  currentTime < ? 
                                -
                                INTERVAL 1 SECOND
            ';


            
            $queryDB = $connectDatabase->query($deleteUserOff);
            $queryDB->execute([$currentTime]);
            if($queryDB->rowCount()) {
                $this->insertUserOff($connectDatabase, $currentTime);
            }
            


        }
    }
    