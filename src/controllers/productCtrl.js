angular.module('Kubicon')
    .controller('ProductCtrl', function($scope, $rootScope, $location) {
        $rootScope.selectedPage = 2;

        var productsMap = [{
            id: 1,
            title: 'Proiecte generale',
            products: [{
                id: 1,
                title: 'Autodesk AUTOCAD LT',
                img: './assets/images/product1.png',
                description: ' Solutia software 2D, AutoCAD LT®, destinata redactarii si intocmirii detaliilor de executie, reprezinta o alegere profesionala ce vizeaza asigurarea productivitatii, fiabilitatii si compatibilitatii. Formatul nativ de fisier DWG ofera stabilitate si este perfect compatibil cu toate solutiile de proiectare Autodesk. Solutia software 2D, AutoCAD LT®, destinata redactarii si intocmirii detaliilor de executie, reprezinta o alegere profesionala ce vizeaza asigurarea productivitatii, fiabilitatii si compatibilitatii. Formatul nativ de fisier DWG ofera stabilitate si este perfect compatibil cu toate solutiile de proiectare Autodesk.'
            }, {
                id: 2,
                title: 'AUTOCAD 2013',
                img: './assets/images/product1.png',
                description: 'Proiectati si modelati universul inconjurator cu ajutorul functiilor performante si caracteristicilor flexibile ale aplicatiei software AutoCAD®, unul dintre cele mai utilizate programe de proiectare 2D si 3D la nivel mondial. Realizati documentatia de proiect rapid, partajati documente si explorati ideile intuitiv in mediul de lucru 3D al AutoCAD. Instrumentele performante de programare si multitudinea de “add-ons” disponibile va ofera posibilitatea personalizarii aplicatiei in functie de nevoile dvs. specifice de lucru.'
            }, {
                id: 3,
                title: '3DS Max',
                img: './assets/images/product1.png',
                description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
            }, {
                id: 4,
                title: 'New Box',
                img: './assets/images/product1.png',
                description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
            }]
        }, {
            id: 2,
            title: 'Mecanica',
            products: [{
                id: 5,
                title: 'Autodesk AUTOCAD LT',
                img: './assets/images/product1.png',
                description: 'Solutia software 2D, AutoCAD LT®, destinata redactarii si intocmirii detaliilor de executie, reprezinta o alegere profesionala ce vizeaza asigurarea productivitatii, fiabilitatii si compatibilitatii. Formatul nativ de fisier DWG ofera stabilitate si este perfect compatibil cu toate solutiile de proiectare Autodesk.'
            }, {
                id: 6,
                title: 'AUTOCAD 2013',
                img: './assets/images/product1.png',
                description: 'Proiectati si modelati universul inconjurator cu ajutorul functiilor performante si caracteristicilor flexibile ale aplicatiei software AutoCAD®, unul dintre cele mai utilizate programe de proiectare 2D si 3D la nivel mondial. Realizati documentatia de proiect rapid, partajati documente si explorati ideile intuitiv in mediul de lucru 3D al AutoCAD. Instrumentele performante de programare si multitudinea de “add-ons” disponibile va ofera posibilitatea personalizarii aplicatiei in functie de nevoile dvs. specifice de lucru.'
            }, {
                id: 7,
                title: '3DS Max',
                img: './assets/images/product1.png',
                description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
            }, {
                id: 8,
                title: '3DS Max',
                img: './assets/images/product1.png',
                description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
            }, {
                id: 9,
                title: '3DS Max',
                img: './assets/images/product1.png',
                description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
            }, {
                id: 10,
                title: '3DS Max',
                img: './assets/images/product1.png',
                description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
            }]
        }, {
            id: 3,
            title: 'Instalatii',
            products: [{
                id: 11,
                title: 'Autodesk AUTOCAD LT',
                img: './assets/images/product1.png',
                description: 'Solutia software 2D, AutoCAD LT®, destinata redactarii si intocmirii detaliilor de executie, reprezinta o alegere profesionala ce vizeaza asigurarea productivitatii, fiabilitatii si compatibilitatii. Formatul nativ de fisier DWG ofera stabilitate si este perfect compatibil cu toate solutiile de proiectare Autodesk.'
            }, {
                id: 12,
                title: 'AUTOCAD 2013',
                img: './assets/images/product1.png',
                description: 'Proiectati si modelati universul inconjurator cu ajutorul functiilor performante si caracteristicilor flexibile ale aplicatiei software AutoCAD®, unul dintre cele mai utilizate programe de proiectare 2D si 3D la nivel mondial. Realizati documentatia de proiect rapid, partajati documente si explorati ideile intuitiv in mediul de lucru 3D al AutoCAD. Instrumentele performante de programare si multitudinea de “add-ons” disponibile va ofera posibilitatea personalizarii aplicatiei in functie de nevoile dvs. specifice de lucru.'
            }, {
                id: 13,
                title: '3DS Max',
                img: './assets/images/product1.png',
                description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
            }, {
                id: 14,
                title: '3DS Max',
                img: './assets/images/product1.png',
                description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
            }, {
                id: 15,
                title: '3DS Max',
                img: './assets/images/product1.png',
                description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
            }]
        }, {
            id: 4,
            title: 'Structuri',
            products: [{
                id: 16,
                title: 'Autodesk AUTOCAD LT',
                img: './assets/images/product1.png',
                description: 'Solutia software 2D, AutoCAD LT®, destinata redactarii si intocmirii detaliilor de executie, reprezinta o alegere profesionala ce vizeaza asigurarea productivitatii, fiabilitatii si compatibilitatii. Formatul nativ de fisier DWG ofera stabilitate si este perfect compatibil cu toate solutiile de proiectare Autodesk.'
            }, {
                id: 17,
                title: 'AUTOCAD 2013',
                img: './assets/images/product1.png',
                description: 'Proiectati si modelati universul inconjurator cu ajutorul functiilor performante si caracteristicilor flexibile ale aplicatiei software AutoCAD®, unul dintre cele mai utilizate programe de proiectare 2D si 3D la nivel mondial. Realizati documentatia de proiect rapid, partajati documente si explorati ideile intuitiv in mediul de lucru 3D al AutoCAD. Instrumentele performante de programare si multitudinea de “add-ons” disponibile va ofera posibilitatea personalizarii aplicatiei in functie de nevoile dvs. specifice de lucru.'
            }, {
                id: 18,
                title: '3DS Max',
                img: './assets/images/product1.png',
                description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
            }, {
                id: 19,
                title: '3DS Max',
                img: './assets/images/product1.png',
                description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
            }, {
                id: 20,
                title: '3DS Max',
                img: './assets/images/product1.png',
                description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
            }]
        }, {
            id: 5,
            title: 'Arhitectura',
            products: [{
                id: 21,
                title: 'Autodesk AUTOCAD LT',
                img: './assets/images/product1.png',
                description: 'Solutia software 2D, AutoCAD LT®, destinata redactarii si intocmirii detaliilor de executie, reprezinta o alegere profesionala ce vizeaza asigurarea productivitatii, fiabilitatii si compatibilitatii. Formatul nativ de fisier DWG ofera stabilitate si este perfect compatibil cu toate solutiile de proiectare Autodesk.'
            }, {
                id: 22,
                title: 'AUTOCAD 2013',
                img: './assets/images/product1.png',
                description: 'Proiectati si modelati universul inconjurator cu ajutorul functiilor performante si caracteristicilor flexibile ale aplicatiei software AutoCAD®, unul dintre cele mai utilizate programe de proiectare 2D si 3D la nivel mondial. Realizati documentatia de proiect rapid, partajati documente si explorati ideile intuitiv in mediul de lucru 3D al AutoCAD. Instrumentele performante de programare si multitudinea de “add-ons” disponibile va ofera posibilitatea personalizarii aplicatiei in functie de nevoile dvs. specifice de lucru.'
            }, {
                id: 23,
                title: '3DS Max',
                img: './assets/images/product1.png',
                description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
            }
            , {
                id: 24,
                title: '3DS Max',
                img: './assets/images/product1.png',
                description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
            }]
        }, {
            id: 6,
            title: 'Simulari',
            products: [{
                id: 25,
                title: 'Autodesk AUTOCAD LT',
                img: './assets/images/product1.png',
                description: 'Solutia software 2D, AutoCAD LT®, destinata redactarii si intocmirii detaliilor de executie, reprezinta o alegere profesionala ce vizeaza asigurarea productivitatii, fiabilitatii si compatibilitatii. Formatul nativ de fisier DWG ofera stabilitate si este perfect compatibil cu toate solutiile de proiectare Autodesk.'
            }, {
                id: 26,
                title: 'AUTOCAD 2013',
                img: './assets/images/product1.png',
                description: 'Proiectati si modelati universul inconjurator cu ajutorul functiilor performante si caracteristicilor flexibile ale aplicatiei software AutoCAD®, unul dintre cele mai utilizate programe de proiectare 2D si 3D la nivel mondial. Realizati documentatia de proiect rapid, partajati documente si explorati ideile intuitiv in mediul de lucru 3D al AutoCAD. Instrumentele performante de programare si multitudinea de “add-ons” disponibile va ofera posibilitatea personalizarii aplicatiei in functie de nevoile dvs. specifice de lucru.'
            }, {
                id: 27,
                title: '3DS Max',
                img: './assets/images/product1.png',
                description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
            }
            , {
                id: 28,
                title: '3DS Max',
                img: './assets/images/product1.png',
                description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
            }
            , {
                id: 29,
                title: '3DS Max',
                img: './assets/images/product1.png',
                description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
            }]
        }, {
            id: 7,
            title: 'Infrastructura',
            products: [{
                id: 30,
                title: 'Autodesk AUTOCAD LT',
                img: './assets/images/product1.png',
                description: 'Solutia software 2D, AutoCAD LT®, destinata redactarii si intocmirii detaliilor de executie, reprezinta o alegere profesionala ce vizeaza asigurarea productivitatii, fiabilitatii si compatibilitatii. Formatul nativ de fisier DWG ofera stabilitate si este perfect compatibil cu toate solutiile de proiectare Autodesk.'
            }, {
                id: 31,
                title: 'AUTOCAD 2013',
                img: './assets/images/product1.png',
                description: 'Proiectati si modelati universul inconjurator cu ajutorul functiilor performante si caracteristicilor flexibile ale aplicatiei software AutoCAD®, unul dintre cele mai utilizate programe de proiectare 2D si 3D la nivel mondial. Realizati documentatia de proiect rapid, partajati documente si explorati ideile intuitiv in mediul de lucru 3D al AutoCAD. Instrumentele performante de programare si multitudinea de “add-ons” disponibile va ofera posibilitatea personalizarii aplicatiei in functie de nevoile dvs. specifice de lucru.'
            }, {
                id: 32,
                title: '3DS Max',
                img: './assets/images/product1.png',
                description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
            }, {
                id: 33,
                title: '3DS Max',
                img: './assets/images/product1.png',
                description: 'Autodesk® 3ds Max® Design ofera noi unelte puternice de randare, accelereaza fluxurile de lucru repetate si sporeste interoperabilitatea, crescand semnificativ productivitatea generala si calitatea lucrarilor rezultate. Mai mult decat atat, usurinta lucrului cu date CAD se datoreaza interoperabilitatii cu solutia software Autodesk® Alias® si fluxului de lucru automat catre AutoCAD® Civil 3D®.'
            }]
        }];

        $scope.category = {};
        $scope.product = {};
        $scope.productListId = null;

        $scope.initLocation = function() {
            var items = $location.path().split('/');
            var location = items[items.length - 1];

            //if (!isNaN(location)) {
                for (var i = 0; i < productsMap.length; i++) {
                    if (productsMap[i].title == location) {
                        $scope.category = productsMap[i];
                        return;
                    }
                }
            //}
        };

        $scope.initProduct = function() {
            var items = $location.path().split('/');
            var location = items[items.length - 2];
            var product = items[items.length - 1];

            //if (!isNaN(location) && !isNaN(product)) {
                for (var i = 0; i < productsMap.length; i++) {
                    if (productsMap[i].title == location) {
                        $scope.category = productsMap[i];
                        for (var j = 0; j < productsMap[i].products.length; j++) {
                            if (productsMap[i].products[j].title == product) {
                                $scope.product = productsMap[i].products[j];
                                $scope.productListId = productsMap[i].title;
                                return;
                            }
                        }
                    }
                }
            //}
        };

        $scope.selectProduct = function(product) {
            $rootScope.selectProduct($scope.category.title, product.title);
        };

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