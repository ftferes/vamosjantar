'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  	'ngRoute',
  	'myApp.menu',
  	'myApp.notFound',
  	'myApp.home',
    'myApp.establishment',
    'myApp.successEmail',
  	'myApp.header',
  	'myApp.footer',
    'myApp.version',
    'ui.bootstrap'
])

.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}])

// .config(['$routeProvider', function($routeProvider) {
// 	$routeProvider.otherwise({redirectTo: '/notFound'});
// }]);



