'use strict';

angular.module('myApp.footer', ['angular-flexslider'])

.controller('FooterCtrl', ['$scope', '$location', 'waitPage', function($scope, $location, waitPage) {

    $scope.waitPage = waitPage;


    $scope.showThisMenu = function(page) {
        return page === $location.path().substring(1) ? true: false;
    };

	$scope.slides = [
        {image: 'images/recentEstablishments/img1.jpg'},
        {image: 'images/recentEstablishments/img2.jpg'},
        {image: 'images/recentEstablishments/img3.jpg'},
        {image: 'images/recentEstablishments/img1.jpg'},
        {image: 'images/recentEstablishments/img2.jpg'},
        {image: 'images/recentEstablishments/img3.jpg'},
        {image: 'images/recentEstablishments/img1.jpg'},
        {image: 'images/recentEstablishments/img2.jpg'},
        {image: 'images/recentEstablishments/img3.jpg'}
    ];

}]);