angular.module("Kubicon")
	.directive("absolutContent", function($timeout) {
		return {
			compile: function() {
				return function($scope, $element) {
					$timeout(function() {
						var element = $($element);
						element.css("height", element.find(".overlay").height());
					}, 100);
				};
			}
		};
	})
	.directive("absolutContainer", function($timeout) {
		return {
			compile: function() {
				return function($scope, $element) {
					$timeout(function() {
						var element = $($element);
						element.css("height", element.find(".footer").height());
					}, 150);
				};
			}
		};
	});