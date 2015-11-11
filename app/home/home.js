'use strict';

angular.module('myApp.home', ['ngRoute', 'ngAnimate', 'duScroll'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', '$location', 'waitPage', function($scope, $location, waitPage) {

	$scope.waitPage = waitPage;
	$scope.imgToWaitPage = "images/featured/img1.jpg";

  	$scope.restaurants = "images/foodTypes/restaurants.jpg";
  	$scope.pizzaria    = "images/foodTypes/pizzeria.jpg";
	$scope.snackBar    = "images/foodTypes/snackBar.jpg";
	$scope.orders      = "images/foodTypes/orders.jpg";

	$scope.arrow       = "images/arrow.png";
	$scope.exit        = "images/exit.png";

	$scope.goTo = function(address){
		$location.path(address);
	};
	




	$scope.slides = [
		{
	    	image: "images/featured/img1.jpg",
	      	name: "Pizzaria do Adão",
	      	telephone: "(16) 99999-9999 | (16) 3434-5434",
	      	address: "Rua Deufino Meirelles, nº 999- Centro"
	    },
		{
	    	image: "images/featured/img2.jpg",
	      	name: "Pizzaria do Adão",
	      	telephone: "(16) 99999-9999 | (16) 3434-5434",
	      	address: "Rua Deufino Meirelles, nº 999- Centro"
	    },
	    {
	    	image: "images/featured/img3.jpg",
	      	name: "Pizzaria do Adão",
	      	telephone: "(16) 99999-9999 | (16) 3434-5434",
	      	address: "Rua Deufino Meirelles, nº 999- Centro"
	    },
	    {
	      	image: "images/featured/img4.jpg",
	      	name: "Lanchonete da Jú",
	      	telephone: "(16) 43234-9929 | (16) 34234-5431",
	      	address: "Rua Deufino Meirelles, nº 999- Centro"
	    },
	    {
	      	image: "images/featured/img5.jpg",
	      	name: "Batata e CIA",
	      	telephone: "(16) 43321-1129 | (16) 3412-5321",
	      	address: "Rua Deufino Meirelles, nº 999- Centro"
	    }
  	];

	$scope.setEstablishments = function(establishmentsName) {
 		switch(establishmentsName) {
    		case "restaurants":
			  	$scope.establishments = [
			  		{
			  			url: "/pizzariadoadao",
			      		image: "images/foodTypes/restaurants.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	},
			    	{
			    		url: "/pizzariadoadao",
			      		image: "images/foodTypes/restaurants.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	},
			    	{
			    		url: "/pizzariadoadao",
			      		image: "images/foodTypes/restaurants.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	},
			    	{
			    		url: "/pizzariadoadao",
			      		image: "images/foodTypes/restaurants.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	},
			    	{
			    		url: "/pizzariadoadao",
			      		image: "images/foodTypes/restaurants.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	},
			    	{
			    		url: "/pizzariadoadao",
			      		image: "images/foodTypes/restaurants.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	},
			    	{
			    		url: "/pizzariadoadao",
			      		image: "images/foodTypes/restaurants.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	},
			    	{
			    		url: "/pizzariadoadao",
			      		image: "images/foodTypes/restaurants.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	}
			  	];
        		break;
    		case "pizzerias":
			  	$scope.establishments = [
			  		{
			  			url: "/pizzariadoadao",
			      		image: "images/foodTypes/pizzeria.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	},
			    	{
			    		url: "/pizzariadoadao",
			      		image: "images/foodTypes/pizzeria.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	},
			    	{
			    		url: "/pizzariadoadao",
			      		image: "images/foodTypes/pizzeria.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	},
			    	{
			    		url: "/pizzariadoadao",
			      		image: "images/foodTypes/pizzeria.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	}
			  	];
        		break;
        	case "snackBars":
			  	$scope.establishments = [
			    	{
			    		url: "/pizzariadoadao",
			      		image: "images/foodTypes/snackBar.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	},
			    	{
			    		url: "/pizzariadoadao",
			      		image: "images/foodTypes/snackBar.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	},
			    	{
			    		url: "/pizzariadoadao",
			      		image: "images/foodTypes/snackBar.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	},
			    	{
			    		url: "/pizzariadoadao",
			      		image: "images/foodTypes/snackBar.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	},
			    	{
			    		url: "/pizzariadoadao",
			      		image: "images/foodTypes/snackBar.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	}
			  	];
        		break;
        	case "orders":
			  	$scope.establishments = [
			    	{
			    		url: "/pizzariadoadao",
			      		image: "images/foodTypes/orders.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	},
			    	{
			    		url: "/pizzariadoadao",
			      		image: "images/foodTypes/orders.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	},
			    	{
			    		url: "/pizzariadoadao",
			      		image: "images/foodTypes/orders.jpg",
				      	telephone: "(16) 99999-9999 | (16) 3434-5434"
			    	}
			  	];
        		break;    			
        } 		
  	};

}]);