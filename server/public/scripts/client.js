let app = angular.module('App', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngAnimate']);

//configs client side routes
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
        .when('/favorites',{
            templateUrl:'./views/favorites.html',
            controller: 'FavoritesController as vm'
        })
        .otherwise(
            { redirectTo: '/books' }
        );



app.config(function ($themeProvider){
    $themeProvider.theme('default')
        .primaryPalette('green');
    });
});