angular.module("Kubicon", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "./app/views/home.tpl.html",
                controller: "HomeCtrl"
            })
            .when("/products", {
                templateUrl: "./app/views/products.tpl.html",
                controller: "ProductCtrl"
            })
            .otherwise({
                redirectTo: "/"
            });
    });