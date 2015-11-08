'use strict';

angular.module('myApp.successEmail', ['ngRoute', 'ngAnimate', 'duScroll'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/successEmail', {
    	templateUrl: 'successEmail/successEmail.html',
    	controller: 'SuccessEmailCtrl'
  	});
}])

.controller('SuccessEmailCtrl', ['$scope', '$location', '$route', '$window', function($scope, $location, $route, $window) {
	$scope.logo = "images/logo.png";

	$scope.goToHome = function(){
		$location.path("/");
		$window.location.reload();
	};
}]);