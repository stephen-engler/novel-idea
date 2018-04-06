app.controller('UpdateController', ['BooksService', function(BooksService){
    console.log('updateController loaded');
    let self = this;
    let booksService = BooksService;
    self.bookToUpdate = booksService.bookToUpdate;
    self.genreList = booksService.genreList;

    console.log(' in update controller ', self.bookToUpdate);
}]);