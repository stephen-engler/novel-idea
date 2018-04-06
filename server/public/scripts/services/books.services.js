app.service('BooksService', ['$http', '$mdDialog','$sce', function ($http, $mdDialog, $sce) {
    console.log('books service loaded');

    let self = this;

    self.ratingList = {list:[0,1,2,3,4,5]};
    self.books = {list: []};
    self.genreList = {list: []};


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

    self.getImage= function(book){
        //takes book title and author makes it able to go in the url
        let title = book.title.replace(/\s/g, '+');
        let author = book.author.replace(/\s/g, '+');

        $http.get( `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&key=AIzaSyAg_RLsWR31WbP-7Ad3l21cjYMFSOz-0z4`)
             .then(function(response){
                 book.imageurl = response.data.items[0].volumeInfo.imageLinks.thumbnail;
                 self.addBook(book);
             })
             .catch(function(error){
                 console.log('in get image, error ', error);
             });
    };


    self.getBooks = function(){
        console.log('in appservice, get books');
        $http.get('/books').then(function(response){
            self.books.list = response.data;
            console.log(response.data);
        }).catch(function(error){
            console.log('an error in getBooks ', error);
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
    //genre stuff

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

        $http.delete('/books/genre/' + genreId).then(function (response) {
            console.log('deleted');
            self.getGenres();
        }).catch(function (error) {
            console.log('an error in delete genre ', error);
        });

    };
    //load page
    self.getBooks();
    self.getGenres();
    //self.getImage();

}]);