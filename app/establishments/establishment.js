'use strict';

angular.module('myApp.establishment', ['ngRoute', 'angular-flexslider'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pizzariadoadao', {
    templateUrl: 'establishments/pizzariadoadao.html',
    controller: 'EstablishmentCtrl'
  });
}])

.controller('EstablishmentCtrl', ['$scope', function($scope) {

    $scope.establishment = {
        name: "Pizzaria do Adão",
        logo: "images/foodTypes/pizzeria.jpg",
        phones: [
            "(16) 99999-9999",
            "(16) 99999-9999",
            "(16) 99999-9999"
        ],
        address: {
            street: "Rua dos Trabalhadores honestos",
            neighborhood: "Centro",
            number: 999
        },
        openingHours: {
            days: "Terça Feira à Domingo",
            times: "18h às 02h",
            note: "Também abrimos nos feriados"
        },
        notes: {
            deliveryFee: "4,50",
            approximateTimeDelivery: "20 - 40 minutos",
            acceptedCards: "Master Card, Visa",
            facebookLink: "http://www.facebook.com"
        },
        photos:[
            "images/pizzariadoadao/photos/img1.jpg",
            "images/pizzariadoadao/photos/img2.jpg", 
            "images/pizzariadoadao/photos/img3.jpg",
            "images/pizzariadoadao/photos/img4.jpg",
            "images/pizzariadoadao/photos/img5.jpg"
        ],
        whoWeAre: {
            texts: [
                "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce tempor nulla vel lectus egestas imperdiet. Aenean auctor velit ipsum, id mattis dui aliquet eu. In eleifend lacus et augue commodo convallis. Sed vitae ipsum vitae urna dignissim vulputate.",
                "Cras quam ante, maximus blandit tincidunt in, iaculis sit amet nibh. Nulla dapibus sem nec augue hendrerit elementusem nec augue hendrerit elementusem nec augue hendrerit elementusem nec augue hendrerit elementum at congue nibh. Sed nec dignissim augue.",
                "Cras quam ante, maximus blandit tincidunt in, iaculis sit amet nibh. Nulla dapibus sem nec augue hendrerit elementum at congue nibh. Sed nec dignissim augue. Cras quam antdit tincidunt in, iaculis sit amet nibh. Nulla dapibus sem nec augue hendrerit elementum at congue nibh. Sed nec dignissim auguee. Cras quam ante, maximus blandit tincidunt in, iaculis sit amet nibh. Nulla dapibus sem nec augue hendrerit elementu."
            ],
            photo: "images/pizzariadoadao/whoWeAre/img1.jpg"
        },
        googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.3220371300877!2d-48.315343784521346!3d-21.258716486485877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b96c9b94081e43%3A0xaaa3aa396db132c3!2sTropical+Lanches!5e0!3m2!1spt-BR!2sbr!4v1446839435353",
        videos: [
            "https://www.youtube.com/embed/aiHDYRHxtgM",
            "http://www.facebook.com/video/embed?video_id=628132747223650"
        ],
        menu: [
            {
                title: "Hambúerguer1",
                items: [
                    {
                        name: "X TUDO1",
                        ingredients: "Hambúrguer, ovo, bacon, frango, mussarela, presunto, maionese, tomate, milho, alface."                   
                    },
                    {
                        name: "X TUDO2",
                        ingredients: "Hambúrguer, ovo, bacon, frango, mussarela, presunto, maionese, tomate, milho, alface."                   
                    },
                    {
                        name: "X TUDO3",
                        ingredients: "Hambúrguer, ovo, bacon, frango, mussarela, presunto, maionese, tomate, milho, alface."                   
                    },
                    {
                        name: "X TUDO4",
                        ingredients: "Hambúrguer, ovo, bacon, frango, mussarela, presunto, maionese, tomate, milho, alface."
                    }
                ]
            },
            {
                title: "Hambúerguer2",
                items: [
                    {
                        name: "X TUDO5",
                        ingredients: "Hambúrguer, ovo, bacon, frango, mussarela, presunto, maionese, tomate, milho, alface."                   
                    },
                    {
                        name: "X TUDO6",
                        ingredients: "Hambúrguer, ovo, bacon, frango, mussarela, presunto, maionese, tomate, milho, alface."                   
                    },
                    {
                        name: "X TUDO7",
                        ingredients: "Hambúrguer, ovo, bacon, frango, mussarela, presunto, maionese, tomate, milho, alface."                   
                    },
                    {
                        name: "X TUDO8",
                        ingredients: "Hambúrguer, ovo, bacon, frango, mussarela, presunto, maionese, tomate, milho, alface."
                    }
                ]
            },
            {
                title: "Hambúerguer3",
                items: [
                    {
                        name: "X TUDO9",
                        ingredients: "Hambúrguer, ovo, bacon, frango, mussarela, presunto, maionese, tomate, milho, alface."                   
                    },
                    {
                        name: "X TUDO10",
                        ingredients: "Hambúrguer, ovo, bacon, frango, mussarela, presunto, maionese, tomate, milho, alface."                   
                    },
                    {
                        name: "X TUDO11",
                        ingredients: "Hambúrguer, ovo, bacon, frango, mussarela, presunto, maionese, tomate, milho, alface."                   
                    },
                    {
                        name: "X TUDO12",
                        ingredients: "Hambúrguer, ovo, bacon, frango, mussarela, presunto, maionese, tomate, milho, alface."
                    }
                ]
            }
        ]        
    }


}]);