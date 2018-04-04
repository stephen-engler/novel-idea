let app = angular.module('App', ['ngRoute', 'ngMaterial', 'ngMessages']);


app.config(function ($routeProvider) {
    console.log('confic loaded');

    $routeProvider
        .when('/books', {
            templateUrl: './views/books.html',
            controller: 'BooksController as vm'
        })
        .when('/genre', {
            templateUrl: './views/genre.html',
            controller: 'GenreController as vm'
        })
        .otherwise(
            { redirectTo: '/books' }
        );
});