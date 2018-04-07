app.controller('UpdateController', ['BooksService', function(BooksService){
    console.log('updateController loaded');
    let self = this;
    let booksService = BooksService;
    //book to update object 
    self.bookToUpdate = booksService.bookToUpdate;
    //list of genres for dropdown
    self.genreList = booksService.genreList;
    //update book
    self.updateBook = booksService.updateBook;
    //hides the dialog box
    self.hide = booksService.hide;
}]);