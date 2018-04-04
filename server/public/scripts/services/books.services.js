app.service('BooksService', ['$http', '$mdDialog', function ($http, $mdDialog) {
    console.log('books service loaded');

    let self = this;

    self.genreList = {list: ['Scifi', 'fantasy', 'noir', 'fiction', 'romance']};
    self.ratingList = {list:[0,1,2,3,4,5]};

    self.addBook = function(book){
        console.log('in appservice, addBook ', book);
        $http.post('/books',book).then(function(response){
            console.log('addBook response from server ', response);
            //get books
        }).catch(function(error){
            console.log('an error in addBook from server ', error);
        });
    };

}]);