angular.module("Kubicon", ["ngRoute", "ngMap"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "./views/home.tpl.html",
                controller: "HomeCtrl"
            })
            .when("/products", {
                templateUrl: "./views/products.tpl.html",
                controller: "ProductCtrl"
            })
            .when("/clients", {
                templateUrl: "./views/clients.tpl.html",
                controller: "ClientCtrl"
            })
            .when("/products/details", {
                templateUrl: "./views/products-details.tpl.html",
                controller: "ProductCtrl"
            })
            .when("/products/description", {
                templateUrl: "./views/products-description.tpl.html",
                controller: "ProductCtrl"
            })
            .when("/todo", {
                templateUrl: "./views/todo.tpl.html"
            })
            .when("/contact", {
                templateUrl: "./views/contact.tpl.html",
                controller: "ContactCtrl"
            })
            .otherwise({
                redirectTo: "/"
            });
    })
    .run(function($rootScope, $location, $anchorScroll) {
        $anchorScroll.yOffset = 0;
        var redirectUrls = [
            "",
            "products",
            "",
            "",
            "",
            "clients",
            "contact"
        ];
        
        $rootScope.selectPage = function(index) {
            $location.path(redirectUrls[index]);
            $anchorScroll();
        };
    });