app.controller('BooksController', [ 'BooksService',function (BooksService) {
    console.log('books controller loaded');

    let booksService = BooksService;

    let self = this;
    //list of genres from server
    self.genreList = booksService.genreList;
    //list of ratings to loop over 
    self.ratingList = booksService.ratingList;
    //all books in books.list
    self.books = booksService.books;
    //gets Genres
    self.getGenres = booksService.getGenres;
    //updates star
    self.updateStar = booksService.updateStar;

    //confirms delete from user with swal
    self.confirmDelete = function (book) {
        console.log('in deletebook');
        swal({
            title: "Are you sure?",
            text: "Once removed, this book is gone forever",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Abra kadabra! Your book has been deleted!", {
                        icon: "success",
                    });
                    booksService.deleteBook(book);
                } else {
                    swal("Your book is safe!");
                }
            });
    };
    //adds book and sweetalerts the promise
    self.addBook = function(book){
        console.log('addBook');
        booksService.addBook(book).then(function(result){
            swal('Congrats', `You're book was added`, 'success');
        }).catch(function(error){
            swal('oops', 'something went wrong');
        });
    };
}]);