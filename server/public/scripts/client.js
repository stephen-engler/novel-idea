let app = angular.module('App', ['ngRoute', 'ngMaterial', 'ngMessages']);

app.controller('HomeController', [ function(){
    console.log('controller loaded');
}]);


// myApp.config(function ($routeProvider) {
//     console.log('confic loaded');

//     $routeProvider
//         .when('/rent', {
//             templateUrl: './views/rent.html',
//             controller: 'RentController as vm'
//         })
//         .when('/sale', {
//             templateUrl: './views/sale.html',
//             controller: 'SaleController as vm'
//         })
//         .when('/input', {
//             templateUrl: './views/inputs.html',
//             controller: 'InputsController as vm'
//         })
//         .when('/search', {
//             templateUrl: './views/search.html',
//             controller: 'SearchController as vm'
//         })
//         .otherwise(
//             { redirectTo: '/sale' }
//         );
// });