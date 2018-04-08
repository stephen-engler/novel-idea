app.controller('UpdateController', ['BooksService', function(BooksService){
    console.log('updateController loaded');
    let self = this;
    let booksService = BooksService;
    //book to update object 
    self.bookToUpdate = booksService.bookToUpdate;
    //list of genres for dropdown
    self.genreList = booksService.genreList;
    //update book
    self.updateBook = function(book){
        booksService.updateBook(book).then(function(response){
            swal('Yay!', 'The book was updated', 'success');
        })
        .catch(function(error){
            swal('Oops', `Something went wrong:(`);
        });
    };
    
    
    
    //hides the dialog box
    self.hide = booksService.hide;
}]);