'use strict';

angular.module('myApp.header', ['ngSanitize', 'ui.select', 'duScroll'])

.controller('HeaderCtrl', ['$scope', '$location', 'waitPage', function($scope, $location, waitPage) {

    $scope.waitPage = waitPage;

    $scope.establishments = [ 
        {name: 'Robinho Lanches',   type: 'Lanchonete',  url: '/pizzariadoadao'},
        {name: 'Número 1 pizzaria', type: 'Pizzaria',    url: '/pizzariadoadao'},
        {name: 'Lulas Lanche',      type: 'Lanchonete',  url: '/pizzariadoadao'},
        {name: 'Mau Mau Lanche',    type: 'Lanchonete',  url: '/pizzariadoadao'},
        {name: 'Oscar Pizzas',      type: 'Pizzaria',    url: '/pizzariadoadao'}, 
        {name: 'Pé de Batata',      type: 'Batata',      url: '/pizzariadoadao'},
        {name: 'Pizzaria do Adão',  type: 'Pizzaria',    url: '/pizzariadoadao'}
    ];

    $scope.showThisMenu = function(page) {
        return page === $location.path().substring(1) ? true: false;
    };

    $scope.goTo = function(url) {
        $location.path(url);
    };

}]);