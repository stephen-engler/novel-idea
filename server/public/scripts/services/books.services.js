app.service('BooksService', ['$http', '$mdDialog','$sce', function ($http, $mdDialog, $sce) {
    console.log('books service loaded');

    let self = this;
    //sets books object both all books and favorites
    self.books = {list: [], favorites: []};
    //list of genres
    self.genreList = {list: []};
    //book object to update, sent to update controller
    self.bookToUpdate = {book:{}};

    //--------book routes-------------
    //sends post to server with book
    self.addBook = function(book){
        console.log('in appservice, addBook ', book);

        return $http.post('/books',book).then(function(response){
            self.getBooks();
            self.getGenres();
            self.getFavorites();
            return response;
        }).catch(function(error){
            console.log('an error in addBook from server ', error);
            throw error;
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
            self.getFavorites();
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
    //updates book from update controller
    self.updateBook=function(book){
        console.log(book);

        $http({
            method: 'PUT',
            url:'/books/'+ book.id,
            data: book,
            params: { type: 'all' }
        })
        .then(function(response){
            self.getBooks();
            self.getGenres();
            self.getFavorites();
            swal('Yay!', 'The book was updated', 'success');
        })
        .catch(function(error){
            console.log('an error in updateBook ', error);
        });
    };
    //hides dialog for update controller
    self.hide = function () {
        $mdDialog.hide();
    };

    //---------genre routes---------
    //adds genre to db
    self.addGenre = function(genreIn){
        console.log('in addGenre ', genreIn);
        $http.post('/genre', genreIn).then(function(response){
            self.getGenres();
        }).catch(function(error){
            console.log('an error in addGenre from server ', error);
        });
    };
    //gets all genres
    self.getGenres = function(){
        console.log('in get Genre');
        $http.get('/genre').then(function(response){
            console.log('in getGenres response ', response);
            self.genreList.list = response.data;
        }).catch(function(error){
            console.log('an error in getGenres ', error);
        });
    };
    //deletes genre from db
    self.deleteGenre = function (genre) {
        let genreId = genre.id;
        console.log('in delete genre id', genreId);

        return $http.delete('/genre/' + genreId).then(function (response) {
            console.log('deleted');
            self.getGenres();
            return response;
        }).catch(function (error) {
            console.log('an error in delete genre ', error);
            return error;
        });

    };

    // ----------Favorite routes------
    //add favorite to db
    self.addFavorite = function(book){
        console.log('in add favorites ');
        $http({
            method: 'POST',
            url:'/favorite',
            data: book,
            //sets type of put request as param
            params: {type: 'addFavorite'}
        })
        .then(function(response){
            console.log('in response from server in add favorites ', response);
            self.getBooks();
            self.getFavorites();
            
        })
        .catch(function(error){
            console.log('an error in adding favorites ', error);
        });
    };
    //gets all favorites from db
    self.getFavorites = function(){
        console.log('in get favorites');
        $http({
            method: 'GET',
            url: '/favorite',
        })
        .then(function(response){
            console.log('in get favorites response from server ', response.data);
            self.books.favorites = response.data;
        })
        .catch(function(error){
            console.log('an error from server in get favorites ', error);
        });
    };
    //deletes favorites 
    self.removeFavorite = function(book){
        console.log('in remove favorites');
        return $http.delete('/favorite/'+book.favBookId)
            .then(function(response){
                self.getBooks();
                self.getFavorites();
                return response;
            })
            .catch(function(error){
                console.log('an error in remove favorites from server ', error);
                throw error;
            });
    };

    //-----------load page------------
    self.getBooks();
    self.getGenres();
    self.getFavorites();

}]);