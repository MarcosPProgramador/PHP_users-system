<?php

abstract class repository {
    public function __construct() {
        $this->connection = tasks::Class('connection');
    }

    protected function find(string $table) {
        $query = "SELECT * FROM `$table`";
        $response = $this->connection->query($query);

        $response->execute();

        $users = $response->fetchAll(PDO::FETCH_ASSOC);

        return $users;
    }
}
