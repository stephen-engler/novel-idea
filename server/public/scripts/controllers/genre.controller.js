app.controller('GenreController', ['BooksService', function (BooksService){
    console.log('genre controller loaded');
    
    let self = this;
    let booksService = BooksService;
    self.genreList = booksService.genreList;
    self.addGenre = booksService.addGenre;
    self.getGenre = booksService.getGenre;

    //checks if the genre is in use
    self.deleteGenre = function(genre){
        if(genre.count>0){
            swal('Sorry :(', `You can't delete an in use genre.`);
        }
        else{
            swal('Yay!', `I don't like that genre either.`);
            booksService.deleteGenre(genre);
        }
    };
    
}]);