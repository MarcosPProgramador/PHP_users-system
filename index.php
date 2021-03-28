<?php

require './config.php';
class tasks {

    public static function Class ($class) {

        if (class_exists($class)) {
            return new $class();
        }

    }

    public static function Endpoint() {

        $endpoint = $_SERVER['REQUEST_URI'];
        $endpoint = strtolower($endpoint);

        switch ($endpoint) {
        case '/':
            return "/home";
            break;

        default:
            return "$endpoint";
            break;
        }

    }

}

tasks::Class('routes');
tasks::Class('controller');
