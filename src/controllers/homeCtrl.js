angular.module('Kubicon')
    .controller('HomeCtrl', function($scope, $rootScope, $location) {
        $rootScope.selectedPage = 0;

        $scope.slides = [{
            title: 'Autodesk Maya I',
            text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque velit velit, porttitor a congue a, imperdiet id justo. Maecenas vel scelerisque lorem. Fusce lorem erat, bibendum in pretium quis, aliquam nec nibh'
        }, {
            title: 'Autodesk Maya II',
            text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque velit velit, porttitor a congue a, imperdiet id justo. Maecenas vel scelerisque lorem. Fusce lorem erat, bibendum in pretium quis, aliquam nec nibh'
        }, {
            title: 'Autodesk Maya III',
            text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque velit velit, porttitor a congue a, imperdiet id justo. Maecenas vel scelerisque lorem. Fusce lorem erat, bibendum in pretium quis, aliquam nec nibh'
        }];
        var homeMap = [{
            id: 1,
            title: 'istoric'
        }, {
            id: 2,
            title: 'misiune si valori'
        }, {
            id: 3,
            title: 'partener'
        }];

    });