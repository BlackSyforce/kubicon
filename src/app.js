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
            .when("/services", {
                templateUrl: "./views/services.tpl.html",
                controller: "ServiceCtrl"
            })
            .when("/mission", {
                templateUrl: "./views/mission.tpl.html"
            })
            .when("/history", {
                templateUrl: "./views/history.tpl.html",
                controller: "HistoryCtrl"
            })
            .when("/partners", {
                templateUrl: "./views/partners.tpl.html",
                controller: "HistoryCtrl"
            })
            .otherwise({
                redirectTo: "/products",
                controller: "HistoryCtrl"
            });
    })
    .run(["$rootScope", "$location", "$anchorScroll", "$window", "HttpService", function($rootScope, $location, $anchorScroll, $window, HttpService) {
        $rootScope.showPopupForm = false;
        $rootScope.form = {};

        $anchorScroll.yOffset = 0;
        var redirectUrls = [
            "about_us",
            "",
            "products",
            "services",
            "clients",
            "contact"
        ];

        $rootScope.link = function (redirectLink){
            $window.location.href = redirectLink;
            $anchorScroll();
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

        $rootScope.showForm = function() {
            $rootScope.showPopupForm = true;
        };

        $rootScope.hideForm = function() {
            $rootScope.showPopupForm = false;
            $rootScope.form = {};
        };

        $rootScope.submitForm = function() {
            HttpService.handleSubmit($rootScope.form);
            $rootScope.hideForm();
        };
    }]);