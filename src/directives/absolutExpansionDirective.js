angular.module("Kubicon")
	.directive("absolutContent", function($timeout, $rootScope) {
		return {
			compile: function() {
				return function($scope, $element) {
					$rootScope.$on("imageLoaded", function() {
						var element = $($element);
						element.css("height", element.find(".overlay").height());
					});
					$timeout(function() {
						var element = $($element);
						element.css("height", element.find(".overlay").height());
					}, 100);
				};
			}
		};
	})
	.directive("absolutContainer", function($timeout, $rootScope) {
		return {
			compile: function() {
				return function($scope, $element) {
					$rootScope.$on("imageLoaded", function() {
						var element = $($element);
						element.css("height", element.find(".footer").height());
					});
					$timeout(function() {
						var element = $($element);
						element.css("height", element.find(".footer").height());
					}, 150);
				};
			}
		};
	});