<?php 

require './config.php';

class simpleTasks
{
    public static function Class($class)
    {
        if (class_exists($class)) 
            return new $class;   
    }
    public static function Resourse()
    {
        $resource = $_GET['url'] ?? 'home';
        $resource = strtolower($resource);
        return "/$resource";
    }
}

simpleTasks::Class('viewRoutes');

switch (simpleTasks::Resourse()) {
    case '/home':
        if (isset($_SESSION['logged']))
            simpleTasks::Class('usersController');
        
    break;
    case '/login':
        simpleTasks::Class('logInController');
    break;
    case '/signup':
        simpleTasks::Class('signUpController');
    break;
    
}

 