'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  	'ngRoute',
  	'myApp.menu',
  	'myApp.notFound',
  	'myApp.home',
  	'myApp.contact',
    'myApp.whoWeAre',
  	'myApp.header',
  	'myApp.footer',
    'myApp.version',
    'ui.bootstrap'
])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/notFound'});
}]);
