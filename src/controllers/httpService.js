angular.module('Kubicon')
	.service('HttpService', function($http) {
		return {
			handleSubmit: function(data) {
				$http({
					method: "POST",
					url: "http://localhost:4000/todo",
					data: data
				});
			}
		}
	});