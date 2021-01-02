<?php 
    class viewRoute
    {   
        public function __construct() {
            include './views/public/template.php';
        }
  
        public function getConfig($datas)
        {

            $undefined = 'undefined';

            $layout  = $datas['layout'] ?? $undefined;
            $title  = $datas['title'] ?? $undefined;
            $icon  = $datas['icon'] ?? $undefined;
            $header = $datas['header'] ?? $undefined;
            $footer = $datas['footer'] ?? $undefined;
            $script = $datas['script'] ?? $undefined;
            $style = $datas['style'] ?? $undefined;
            
            

            switch ($this->response) {
                case 'title':
                    return $title;
                case 'style':
                    if($style != 'undefined'){
                        $arr = [];
                        foreach ($style as $value) {
                            $filePath = "./views/public/styles/$value";
                            if(file_exists($filePath))
                                array_push($arr, $filePath);
                        }
                        if(count($arr))
                            return $arr;
                            return false;
                    }else return false;;

                    
                case 'script':
                    if($script != 'undefined'){
                        $arr = [];
                        foreach ($script as $value) {
                            $filePath = "./views/public/js/$value";
                            if(file_exists($filePath))
                                array_push($arr, $filePath);
                        }
                        if(count($arr))
                            return $arr;
                            return false;
                    } else return false;
                case 'icon':
                    return "./views/public/assets/icon/$icon";
                case 'header':
                    $templateHeaderPath = "./views/public/templates/$header";
                    if(file_exists($templateHeaderPath)) include $templateHeaderPath;
                break;
                case 'section':
                    $layoutPath = "./views/public/layouts/$layout";
                    if(file_exists($layoutPath)) include $layoutPath;
                break;
                case 'footer':
                    $templateFooterPath = "./views/public/templates/$footer";
                    if(file_exists($templateFooterPath)) include $templateFooterPath;
                
                break;

            }
        }
        public function setConfig($response)
        {   
            $this->response = strtolower($response);

            switch (simpleTasks::Endpoint()) {
                case '/home':
                    if (isset($_SESSION['logged'])){ 

                        $config = [
                            'layout' => 'home.php', 
                            'title' => 'Welcome!',
                            'header' => 'header.php',
                            'footer' => 'footer.php',
                            'icon' => 'welcome.png',
                            'style' => ['home.min.css'],
                            'script' => ['home.js'],
                        ];

                        return $this->getConfig($config);
                    };

                    header('Location: logIn');
                    exit();
                break;
                    
                case '/login':
                    $config = [
                        'layout' => 'logIn.php', 
                        'title' => 'Log In',
                        'icon' => 'logIn.png',    
                        'header' => 'headerIn.php',
                        'footer' => 'footerIn.php',
                        'style' => ['styleIn.min.css'],
                    ];
                    return $this->getConfig($config);
                case '/signup':
                    $config = [
                        'layout' => 'signUp.php', 
                        'title' => 'Sign Up',
                        'style' => ['styleIn.min.css'],
                        'icon' => 'signUp.png',    
                        'header' => 'headerIn.php',
                        'footer' => 'footerIn.php',
                    ];
                    return $this->getConfig($config);
                default:
                    
                    $config = [
                        'layout' => 'error.php',
                        'title' => '[Error] 204', 
                        'icon' => 'error.png',    
                    ];

                    return $this->getConfig($config);
            }   
        }
    }
    

