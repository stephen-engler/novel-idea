app.controller('UpdateController', ['BooksService', function(BooksService){
    console.log('updateController loaded');
    let self = this;
    let booksService = BooksService;
    self.bookToUpdate = booksService.bookToUpdate;
    self.genreList = booksService.genreList;
    self.updateBook = booksService.updateBook;
    self.hide = booksService.hide;
    console.log(' in update controller ', self.bookToUpdate);
}]);