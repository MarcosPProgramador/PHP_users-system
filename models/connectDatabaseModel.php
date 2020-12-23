<?php 
    class connectDatabaseModel
    {   
        const PASSWORD = '';
        const USER = 'root';
        const DATABASE = 'dbname=database';
        const HOST = 'mysql:host=localhost;';
        
        public $connectDB;

        public function __construct() {
            try {
                $connectDB = new PDO(
                    self::HOST.self::DATABASE, 
                    self::USER, 
                    self::PASSWORD,
                    array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8') 
                );
                
                $connectDB->setAttribute(
                    PDO::ATTR_ERRMODE, 
                    PDO::ERRMODE_EXCEPTION
                );
                
                $this->connectDB = $connectDB;
            } catch (\Throwable $th) {
                die($th->getMessage());
            }
        }

        public  function query($query)
        {
           return $query =$this->connectDB->prepare($query);
        }


    }
    