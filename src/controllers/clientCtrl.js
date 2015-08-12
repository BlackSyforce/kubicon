angular.module('Kubicon')
    .controller('ClientCtrl', function($scope, $rootScope) {
        $rootScope.selectedPage = 4;

        $scope.clients = [
        	'./assets/images/discositiganas.png',
        	'./assets/images/installDataProject.png',
        	'./assets/images/sdcproject.png',
        	'./assets/images/traprmec.png',
        	'./assets/images/upc.png'
        ];

        $scope.getClientCss = function($index) {
        	switch ($index % 5) {
        		case 0: {
        			return 'bl1 br3';
        		}
        		case 1: {
        			return 'br1';
        		}
        		case 2: {
        			return 'bt-1 br1';
        		}
        		case 3: {
        			return 'bl4 br1';
        		}
        		case 4: {
        			return 'bl1';
        		}
        	}

        	return;
        };
    });