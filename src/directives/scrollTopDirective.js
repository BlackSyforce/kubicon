angular.module("Kubicon")
    .directive("scrollTop", function() {
        return {
            restrict: "A",
            link: function($scope, $element) {
                var offset = 0;
                var duration = 500;
                
                $(window).scroll(function() {
                    if ($(this).scrollTop() > offset) {
                        $($element).fadeIn(duration);
                    } else {
                        $($element).fadeOut(duration);
                    }
                });

                $($element).click(function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, "slow");
                });
            }
        };
    });