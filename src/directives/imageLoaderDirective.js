angular.module("Kubicon")
	.directive("imageLoader", function($rootScope) {
		return {
			restrict: "A",
			link: function($scope, $element) {
				$element.bind("load", function() {
					console.log("Image Loaded");
					$rootScope.$broadcast("imageLoaded");
				});
			}
		};
	});