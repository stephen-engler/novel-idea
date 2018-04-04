app.controller('BooksController', [ 'BooksService',function (BooksService) {
    console.log('books controller loaded');

    let booksService = BooksService;

    let self = this;
    self.addBook = booksService.addBook;
    self.genreList = booksService.genreList;
    self.ratingList = booksService.ratingList;
}]);