app.controller('FavoritesController', ['BooksService', function(BooksService){
    console.log('favorite controller loaded');
    let self = this;
    let booksService = BooksService;
    self.books = booksService.books;
    
}]);