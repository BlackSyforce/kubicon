angular.module('Kubicon')
    .controller('HomeCtrl', function($scope, $rootScope, $location) {
        $rootScope.selectedPage = 0;

        $scope.slides = [{
            title: 'Kubicon - Autodesk Silver Partner',
            text: 'Traim in era vitezei, unde totul se intampla cu rapiditate iar ca sa ramai relevant este esential sa intampini oportunitatile si sa te adaptezi noilor cerinte ale pietei. KUBICON, Partener Silver Autodesk, ofera clientilor sai o paleta larga de produse si servicii menite sa ajute si sa creasca performanta clientilor atunci cand vine vorba de utilizarea produselor AUTODESK. - Software reseller, - Consultanta CAD si Suport Tehnic, - Training autorizat Autodesk, - Certificare Autodesk'
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