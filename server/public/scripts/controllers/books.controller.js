app.controller('BooksController', [ 'BooksService','$mdDialog',function (BooksService, $mdDialog) {
    console.log('books controller loaded');

    let booksService = BooksService;

    let self = this;
    
    //all books in books.list
    self.books = booksService.books;
    //list of genre's from teh server
    self.genreList = booksService.genreList;
    //gets Genres
    self.getGenres = booksService.getGenres;
    //list of ratings to loop over 
    self.ratingList = booksService.ratingList;
    //sets reverse for the view
    self.reverse = false;
    //updates star
    self.updateStar = booksService.updateStar;
    //add <3
    self.addFavorite = booksService.addFavorite;
    

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
    //Shows dialog box for updating book
    self.updateBook = function(ev, book){
        booksService.bookToUpdate.book = book;
        $mdDialog.show({
            controller: "UpdateController as vm",
            templateUrl: '/views/update.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            ariaLabel: 'update'
        })  //once promise is returned hides the dialog
            .then(function (response) {
                console.log('test');
                $mdDialog.hide([response]);
            }, function () {
                console.log('move along');
            });
    };
}]);