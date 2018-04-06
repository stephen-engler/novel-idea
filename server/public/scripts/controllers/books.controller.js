app.controller('BooksController', [ 'BooksService',function (BooksService) {
    console.log('books controller loaded');

    let booksService = BooksService;

    let self = this;
    self.addBook = booksService.addBook;
    self.genreList = booksService.genreList;
    self.ratingList = booksService.ratingList;
    self.books = booksService.books;
    self.getGenres = booksService.getGenres;
    self.getImage = booksService.getImage;

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
}]);