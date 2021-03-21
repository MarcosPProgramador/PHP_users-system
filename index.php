<?php

require './config.php';
class tasks {

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

tasks::Class('routes');
tasks::Class('controller');
