'use strict';

angular.module('myApp.whoWeAre', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/whoWeAre', {
    templateUrl: 'whoWeAre/whoWeAre.html',
    controller: 'WhoWeAreCtrl'
  });
}])

.controller('WhoWeAreCtrl', [function() {

}]);