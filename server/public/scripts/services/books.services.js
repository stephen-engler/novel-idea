app.service('BooksService', ['$http', '$mdDialog','$sce', function ($http, $mdDialog, $sce) {
    console.log('books service loaded');

    let self = this;

    self.ratingList = {list:[0,1,2,3,4,5]};
    self.books = {list: []};
    self.genreList = {list: []};
    self.bookToUpdate = {book:{}};

    //book routes
    //sends post to server with book
    self.addBook = function(book){
        console.log('in appservice, addBook ', book);

        return $http.post('/books',book).then(function(response){
            self.getBooks();
            self.getGenres();
            return response;
        }).catch(function(error){
            console.log('an error in addBook from server ', error);
            return error;
        });
    };
    //get request sets self.books.list equal to response data
    self.getBooks = function(){
        console.log('in appservice, get books');
        $http.get('/books').then(function(response){
            self.books.list = response.data;
            console.log(response.data);
        }).catch(function(error){
            console.log('an error in getBooks ', error);
        });
    };
    //delete request by id
    self.deleteBook = function(book){
        let bookId = book.id;
        console.log('in delete book id', bookId);

        $http.delete('/books/'+bookId).then(function(response){
            console.log('deleted');
            self.getBooks();
            self.getGenres();
        }).catch(function(error){
            console.log('an error in delete book ', error);
        });
    };
    // put request to server expects the book 
    self.updateStar = function(book, value){
        console.log('in updateStart, ', book);

        $http.put('/books/'+book.id, {rating: book.rating + value})
             .then(function(response){
                 console.log('response from server in update start ', response);
                 self.getBooks();
             })
             .catch(function(error){
                 console.log('an error updating star ', error);
             });
    };

    self.updateBook=function(book){
        console.log(book);
        $http({
            method: 'PUT',
            url:'/books/'+ book.id,
            data: book,
            params: {type: 'all'}
        })
        .then(function(response){
            self.getBooks();
            self.getGenres();
            swal('Yay!', 'The book was updated', 'success');
        })
        .catch(function(error){
            console.log('an error in updateBook ', error);
        });
    };

    //genre routes

    self.addGenre = function(genreIn){
        console.log('in addGenre ', genreIn);
        $http.post('/books/genre', genreIn).then(function(response){
            self.getGenres();
        }).catch(function(error){
            console.log('an error in addGenre from server ', error);
        });
    };

    self.getGenres = function(){
        console.log('in get Genre');
        $http.get('/books/genre').then(function(response){
            console.log('in getGenres response ', response);
            self.genreList.list = response.data;
        }).catch(function(error){
            console.log('an error in getGenres ', error);
        });
    };

    self.deleteGenre = function (genre) {
        let genreId = genre.id;
        console.log('in delete genre id', genreId);

        return $http.delete('/books/genre/' + genreId).then(function (response) {
            console.log('deleted');
            self.getGenres();
            return response;
        }).catch(function (error) {
            console.log('an error in delete genre ', error);
            return error;
        });

    };

    self.hide = function () {
        $mdDialog.hide();
    };

    self.addFavorite = function(book){

        $http({
            method: 'POST',
            url:'/books/favorite',
            data: book,
            //sets type of put request as param
            params: {type: 'addFavorite'}
        })
        .then(function(response){
            //get books
        })
        .catch(function(error){
            console.log('an error in adding favorites ', error);
        });
    };

    //load page
    self.getBooks();
    self.getGenres();

}]);