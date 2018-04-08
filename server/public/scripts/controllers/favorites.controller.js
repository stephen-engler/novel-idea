app.controller('FavoritesController', ['BooksService', function(BooksService){
    console.log('favorite controller loaded');
    let self = this;
    let booksService = BooksService;

    self.books = booksService.books;

    self.removeFavorite = function(book){
        booksService.removeFavorite(book).then(function(response){
            swal('yay', `that book isn't very good anyway`);
        }).catch(function(error){
            swal('oops', 'something went wrong:( try again');
        });      
    };
}]);