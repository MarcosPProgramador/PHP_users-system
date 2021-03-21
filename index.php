<?php

require './config.php';
class simpleTasks {

    public static function Class ($class) {

        if (class_exists($class)) {
            return new $class();
        }

    }

    public static function Endpoint() {

        $endpoint = $_GET['url'] ?? 'home';
        $endpoint = strtolower($endpoint);
        return "/$endpoint";
    }

}

simpleTasks::Class('routes');
simpleTasks::Class('controller');
