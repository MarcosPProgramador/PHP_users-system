<?php 

    class usersModel
    {
        public function User()
        {
            
            $currentTime = date('Y-m-d H:i:s');
            $connectDatabase = simpleTasks::Class('connectDatabaseModel');
      
            
            if (isset($_SESSION['logged'])) {
                if (isset($_SESSION['online'])) {
                    $this->updateUsersOn($connectDatabase, $currentTime);
                    $this->insertUserOff($connectDatabase, $currentTime);
                }
                else {
                    $this->insertUserOff($connectDatabase, $currentTime);
                    $this->insertUsersOn($connectDatabase, $currentTime);
                }
            }
      
        }
        public function updateUsersOn($connectDatabase, $currentTime)
        {
           
            $email =  $_SESSION['email']; 

            $query = "  UPDATE `users` 
                        SET lastAction = ?,
                            online = ?
                        WHERE email = ?
            ";
            $queryHaveUser = " SELECT * 
                                FROM `users`
                                WHERE email = ?
            ";

   


        $queryHaveUser = $connectDatabase->query($queryHaveUser);
        $queryHaveUser->execute([$email]);
            if ($queryHaveUser->rowCount()) {

                $queryUpdate = $connectDatabase->query($query);
                $queryUpdate->execute([$currentTime, true, $email]);
                      
           
                
            }else  unset($_SESSION['online']);
                

        }
        public function insertUsersOn($connectDatabase, $currentTime)
        {
            $_SESSION['online'] = true;

            $token = $_SESSION['token'];
            $name = $_SESSION['firstname'];
            $email = $_SESSION['email'];
            $ip = $_SERVER['REMOTE_ADDR'];

            $query = "  INSERT INTO `users` 

                        (
                        online,
                        name,
                        email,
                        token,
                        ip,
                        lastAction
                        ) 

                        VALUES (?,?,?,?,?,?)
            ";

       
            try {
                $queryInsert = $connectDatabase->query($query);
    
                $queryInsert->execute([
                    true,
                    $name,
                    $email,
                    $token,
                    $ip,
                    $currentTime
                ]);
                
            } catch (\Throwable $th) {
               die('');
            }

        
           

        }
        public function insertUserOff($connectDatabase, $currentTime)
        {
            
            $query = "  UPDATE `users` 
                        SET online = ?
                        WHERE 
                        lastAction < ? 
                        -
                        INTERVAL 
                        1 
                        MINUTE 
            ";
            $queryInsert = $connectDatabase->query($query);

            $queryInsert->execute([false, $currentTime]);
        }
    }
    