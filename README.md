# weekend5

CREATE TABLE "books" (
    "id" serial primary key,
	"title" varchar(120) not null,
    "author" varchar(120) not null,
    "year" integer,
    "pages" integer,
    "genreId" integer,
    "rating" integer
);

INSERT INTO "books" ("title", "author", "year", "pages", "genreId","rating")
VALUES ('Hitchikers guide' , 'douglas adams', 1974, 1234, 2, 5),
        ('Lord of the rings' , 'jrr token', 1912, 1234, 1, 5),
		('50 shades of grey', 'i dont know', 2050, 123, 4,0);

CREATE TABLE "genres" (
    "id" serial primary key,
	"genre" varchar (80)
);

INSERT INTO "genres" ("genre") VALUES ('fantasy'), ('scifi'), ('history'), ('fiction'), ('mystery'), ('romance');