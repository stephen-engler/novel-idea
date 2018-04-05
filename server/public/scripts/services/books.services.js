app.service('BooksService', ['$http', '$mdDialog', function ($http, $mdDialog) {
    console.log('books service loaded');

    let self = this;

    self.genreList = {list: ['Scifi', 'fantasy', 'noir', 'fiction', 'romance']};
    self.ratingList = {list:[0,1,2,3,4,5]};
    self.books = {list: []};

    self.addBook = function(book){
        console.log('in appservice, addBook ', book);
        $http.post('/books',book).then(function(response){

            self.getBooks();
            swal('Congrats', `You're book was added`, 'success');
        }).catch(function(error){
            console.log('an error in addBook from server ', error);
        });
    };

    self.getBooks = function(){
        console.log('in appservice, get books');
        $http.get('/books').then(function(response){
            self.books.list = response.data;
        }).catch(function(error){
            console.log('an error in getBooks ', error);
        });
    };

    self.confirmDelete = function(book){
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
                    self.deleteBook(book);
                } else {
                    swal("Your book is safe!");
                }
            });

    };

    self.deleteBook = function(book){
        let bookId = book.id;
        console.log('in delete book id', bookId);

        $http.delete('/books/'+bookId).then(function(response){
            console.log('deleted');
            self.getBooks();
        }).catch(function(error){
            console.log('an error in delete book ', error);
        });
    };

    //load page
    self.getBooks();

}]);