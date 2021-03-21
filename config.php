<?php

session_start();
ob_start();
define('PATH', 'http://localhost/projetos/linguagens/online-user-system/');
date_default_timezone_set('America/Sao_paulo');

spl_autoload_register(function ($class) {
    $path = [
        "./controllers/$class.php",
        "./models/$class.php",
        "./apis/$class.php",
        "./routes/$class.php",
        "./database/$class.php",
        "./repositories/$class.php",
    ];

    foreach ($path as $value) {

        if (file_exists($value)) {
            include_once $value;
        }

    }

});
