app.controller('GenreController', ['BooksService', function (BooksService){
    console.log('genre controller loaded');
    
    let self = this;
    let booksService = BooksService;

    self.addGenre = booksService.addGenre;
    
}]);