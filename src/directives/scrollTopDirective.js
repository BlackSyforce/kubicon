angular.module("Kubicon")
    .directive("scrollTop", function() {
        return {
            restrict: "A",
            link: function($scope, $element) {
                $($element).click(function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, "slow");
                });
            }
        };
    });