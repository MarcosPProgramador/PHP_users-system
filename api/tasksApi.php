<?php

header('Content-Type: application/json; charset=utf8');
date_default_timezone_set('America/Sao_paulo');

class tasksApi
{
    public static function Class($class)
    {
        $paths = [
            "../controllers/$class.php",
            "../models/$class.php",
        ];
        foreach ($paths as  $value)
            if (file_exists($value)) require_once $value;

        return new $class;
    }
}
