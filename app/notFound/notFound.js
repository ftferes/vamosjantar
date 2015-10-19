'use strict';

angular.module('myApp.notFound', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/notFound', {
    templateUrl: 'notFound/notFound.html',
    controller: 'NotFoundCtrl'
  });
}])

.controller('NotFoundCtrl', [function() {

}]);