app.service('BooksService', ['$http', '$mdDialog', function ($http, $mdDialog) {
    console.log('books service loaded');

    let self = this;

    self.addBook = function(book){
        console.log('in appservice, addBook ', book);
    };

}]);