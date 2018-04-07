# weekend5
//create postgresql table for books
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
//Dummy data
INSERT INTO "books" ("title", "author", "year", "pages", "genreId","rating","imageurl")
VALUES 	('Hitchikers guide' , 'douglas adams', 1974, 1234, 2, 5,'https://books.google.com/books/content?id=j24GMN0OtS8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'),
 		('the fellowship of the rings' , 'jrr token', 1912, 1234, 1, 5, 'https://books.google.com/books/content?id=5QRZ4z6A1WwC&printsec=frontcover&img=1&zoom=1&source=gbs_api'),
		('hyperion', 'dan simmons', 2050, 123, 4,0, 'https://books.google.com/books/content?id=u4R_FstZDEgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api');

//create postgresql talbe for genres
CREATE TABLE "genres" (
    "id" serial primary key,
	"genre" varchar (80)
);
//dummy data
INSERT INTO "genres" ("genre") VALUES ('fantasy'), ('scifi'), ('history'), ('fiction'), ('mystery'), ('romance');
//create favorite table
CREATE TABLE "favorites" (
	"id" serial primary key,
	"favBookId" integer
);