# Novel Idea 

## Description
A crud web application where the user can add a book to their collection.  The app 
retrieves the cover from the Google Books api and shows all the books the user
has added to the dom. The user can edit the books information or delete a book 
if necessary.  The user can also view all the genres on a seperate page and all books in those genres.  Finally the user can favorite a book and view all their favorited books in a seperate page.

##Tech Used
* AngularJS
* Express
* Node.js
* PostgreSQL
* Angular Material
* Axios
* Swal
* Google Books Api

## Start up
* npm install
* npm start


### Set up for PostgreSQL tables

Create postgresql table for books
```
CREATE TABLE "books" (
    "id" serial primary key,
	"title" varchar(120) not null,
    "author" varchar(120) not null,
    "year" integer,
    "pages" integer,
    "genreId" integer,
    "rating" integer,
	"imageurl" varchar(500)
);
```
Dummy data for table
```
INSERT INTO "books" ("title", "author", "year", "pages", "genreId","rating","imageurl")
VALUES 	('Hitchikers guide' , 'douglas adams', 1974, 1234, 2, 5,'https://books.google.com/books/content?id=j24GMN0OtS8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'),
 		('the fellowship of the rings' , 'jrr token', 1912, 1234, 1, 5, 'https://books.google.com/books/content?id=5QRZ4z6A1WwC&printsec=frontcover&img=1&zoom=1&source=gbs_api'),
		('hyperion', 'dan simmons', 2050, 123, 4,0, 'https://books.google.com/books/content?id=u4R_FstZDEgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api');
```
Create postgresql table for genres
```
CREATE TABLE "genres" (
    "id" serial primary key,
	"genre" varchar (80)
);
``
Dummy data for genres table
```
INSERT INTO "genres" ("genre") VALUES ('fantasy'), ('scifi'), ('history'), ('fiction'), ('mystery'), ('romance');
```
Create postqresql table for favorites
```
CREATE TABLE "favorites" (
	"id" serial primary key,
	"favBookId" integer
);
```
