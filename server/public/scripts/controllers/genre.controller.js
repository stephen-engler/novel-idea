app.controller('GenreController', ['BooksService', function (BooksService){
    console.log('genre controller loaded');
    
    let self = this;
    //booksService
    let booksService = BooksService;
    //list of genres
    self.genreList = booksService.genreList;
    //add genre function
    self.addGenre = booksService.addGenre;
    //gets genres from server
    self.getGenre = booksService.getGenre;

    //checks if the genre is in use
    self.deleteGenre = function(genre){
        if(genre.count>0){
            swal('Sorry :(', `You can't delete an in use genre.`);
        }//end if
        else{
            swal('Yay!', `I don't like that genre either.`);
            booksService.deleteGenre(genre);
        }//end else
    };
    
}]);