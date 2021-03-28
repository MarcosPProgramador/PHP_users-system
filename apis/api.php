<?php

class api {
    public static string $request;
    public static string $endpoint;

    public function __construct() {
        $request = $_SERVER['REQUEST_METHOD'];

        self::$request = $request;
        self::$endpoint = tasks::Endpoint() === '/home' ? '/' : tasks::Endpoint();

    }

    public static function base(string $resource, string $method) {

        if ($resource === self::$endpoint) {
            $controller = explode('@', $method)[0];

            $method = explode('@', $method)[1];

            $controller = tasks::Class($controller);

            $datas = call_user_func([$controller, $method]);

            http_response_code($datas['code']);
            exit(json_encode($datas['datas'], JSON_UNESCAPED_UNICODE));

        }

    }

    public static function get(string $resource, string $method) {

        if (self::$request === 'GET') {

            self::base($resource, $method);

        };

    }

    public static function post(string $resource, string $method) {

        if (self::$request === 'POST') {

            self::base($resource, $method);
        };
    }

    public static function put(string $resource, string $method) {

        if (self::$request === 'PUT') {
            self::base($resource, $method);
        };
    }

    public static function delete(string $resource, string $method) {

        if (self::$request === 'DELETE') {
            self::base($resource, $method);
        };
    }

}
