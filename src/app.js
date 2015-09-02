angular.module("Kubicon", ["ngRoute", "ngMap"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/products", {
                templateUrl: "./views/products.tpl.html",
                controller: "ProductCtrl"
            })
            .when("/about_us", {
                templateUrl: "./views/home.tpl.html",
                controller: "HomeCtrl"
            })
            .when("/clients", {
                templateUrl: "./views/clients.tpl.html",
                controller: "ClientCtrl"
            })
            .when("/products/:listTitle", {
                templateUrl: "./views/products-details.tpl.html",
                controller: "ProductCtrl",
            })
            .when("/products/:listTitle/:productId", {
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
                redirectTo: "/products"
            });
    })
    .run(function($rootScope, $location, $anchorScroll, $window) {
        $anchorScroll.yOffset = 0;
        var redirectUrls = [
            "about_us",
            "",
            "products",
            "",
            "clients",
            "contact"
        ];
        $rootScope.link = function (redirectLink){
            $window.location.href = redirectLink; 
        }
        
        $rootScope.selectPage = function(index) {
            $location.path(redirectUrls[index]);
            $anchorScroll();
        };

        $rootScope.selectProductList = function(listTitle) {
            $location.path("products/" + listTitle);
            $anchorScroll();
        };

        $rootScope.selectProduct = function(listTitle, productTitle) {
            $location.path("products/" + listTitle + "/" + productTitle);
            $anchorScroll();
        };
    });