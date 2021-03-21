<?php
class connection {
    const PASSWORD = '';
    const USER = 'root';
    const DATABASE = 'dbname=db_users-system';
    const HOST = 'mysql:host=localhost;';

    public $connectDB;

    public function __construct() {
        try {
            $connectDB = new PDO(
                self::HOST . self::DATABASE,
                self::USER,
                self::PASSWORD,
                [PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8']
            );

            $connectDB->setAttribute(
                PDO::ATTR_ERRMODE,
                PDO::ERRMODE_EXCEPTION
            );

            $this->connectDB = $connectDB;
        } catch (\Throwable $th) {
            die('Error');
        }
    }

    public function query(string $query, array $params = null) {
        return $this->connectDB->prepare($query);
    }
}
