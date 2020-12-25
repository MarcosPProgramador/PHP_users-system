<?php 

    header('Content-type: application/JSON; charset=utf8');
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
  