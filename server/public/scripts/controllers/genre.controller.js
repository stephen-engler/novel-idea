app.controller('GenreController', ['BooksService', function (BooksService){
    console.log('genre controller loaded');
    
    let self = this;
    let booksService = BooksService;
    self.genreList = booksService.genreList;
    self.addGenre = booksService.addGenre;
    self.getGenre = booksService.getGenre;
    
}]);