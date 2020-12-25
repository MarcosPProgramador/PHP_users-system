<?php 

    class usersOnlineModel
    {
        public function User()
        {
            $currentTime = date('Y-m-d H:i:s');
            $connectDatabase = simpleTasks::Class('connectDatabaseModel');
            if (isset($_SESSION['logged'])) {
                if (isset($_SESSION['online'])) {
                    // $this->deleteUsersOff($connectDatabase, $currentTime);
                    $this->updateUsersOn($connectDatabase, $currentTime);
                }
                else {
                    $this->insertUsersOn($connectDatabase, $currentTime);
                    // $this->deleteUsersOff($connectDatabase, $currentTime);
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

           

        }
        public function deleteUsersOff($connectDatabase, $currentTime)
        {   
            $email = $_SESSION['email'];
            $deleteUserOff = '  DELETE FROM `users.on`
                                WHERE  currentTime < ? 
                                -
                                INTERVAL 1 MINUTE
            ';

            $deleteRepeatedUser = ' DELETE FROM `users.on` 
                                    WHERE email = ? 
                                    LIMIT 1
            ';

            $selectCheckEmail = '   SELECT email 
                                    FROM `users.on`
                                    WHERE email = ?
             ';


            $queryDB = $connectDatabase->query($deleteUserOff);
            $queryDB->execute([$currentTime]);


            $queryCheck = $connectDatabase->query($selectCheckEmail);
            $queryCheck->execute([$email]);

            if ($queryCheck->rowCount() >= 2){
      
                $queryDelete = $connectDatabase->query($deleteRepeatedUser);
                $queryDelete->execute([$email]);
            }
          

        }
    }
    