app.service('BooksService', ['$http', '$mdDialog', function ($http, $mdDialog) {
    console.log('books service loaded');

    let self = this;

    self.genreList = {list: ['Scifi', 'fantasy', 'noir', 'fiction', 'romance']};
    self.ratingList = {list:[0,1,2,3,4,5]};
    self.books = {list: []};

    self.addBook = function(book){
        console.log('in appservice, addBook ', book);
        $http.post('/books',book).then(function(response){
            console.log('addBook response from server ', response);
            self.getBooks();
        }).catch(function(error){
            console.log('an error in addBook from server ', error);
        });
    };

    self.getBooks = function(){
        console.log('in appservice, get books');
        $http.get('/books').then(function(response){
            self.books.list = response.data;
            console.log(self.books.list);
        }).catch(function(error){
            console.log('an error in getBooks ', error);
        });
    };

}]);