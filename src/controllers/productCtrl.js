angular.module('Kubicon')
    .controller('ProductCtrl', function($scope, $rootScope) {
        $rootScope.selectedPage = 1;

        $scope.products = [{
        	title: 'Autodesk AUTOCAD LT',
        	img: './assets/images/product1.png',
        	description: 'Solutia software 2D, AutoCAD LT®, destinata redactarii si intocmirii detaliilor de executie, reprezinta o alegere profesionala ce vizeaza asigurarea productivitatii, fiabilitatii si compatibilitatii. Formatul nativ de fisier DWG ofera stabilitate si este perfect compatibil cu toate solutiile de proiectare Autodesk.'
        }, {
        	title: 'AUTOCAD 2013',
        	img: './assets/images/product1.png',
        	description: 'Proiectati si modelati universul inconjurator cu ajutorul functiilor performante si caracteristicilor flexibile ale aplicatiei software AutoCAD®, unul dintre cele mai utilizate programe de proiectare 2D si 3D la nivel mondial. Realizati documentatia de proiect rapid, partajati documente si explorati ideile intuitiv in mediul de lucru 3D al AutoCAD. Instrumentele performante de programare si multitudinea de “add-ons” disponibile va ofera posibilitatea personalizarii aplicatiei in functie de nevoile dvs. specifice de lucru.'
        }, {
        	title: '3DS Max',
        	img: './assets/images/product1.png',
        	description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
        }];

        $scope.getCardCss = function($index) {
        	switch ($index % 3) {
        		case 0: {
        			return 'bl1';
        		}
        		case 1: {
        			return 'bl0';
        		}
        		case 2: {
        			return  'bt-1 bl2';
        		}
        	}

        	return;
        };

        $scope.getImageCss = function($index) {
        	switch ($index % 3) {
        		case 0: {
        			return 'bt1';
        		}
        		case 2: {
        			return 'bt2';
        		}
        	}

        	return;
        };
    });