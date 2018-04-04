# weekend5

CREATE TABLE "books" (
    "id" serial primary key,
	"title" varchar(120) not null,
    "author" varchar(120) not null,
    "year" integer,
    "pages" integer,
    "image" varchar(200),
    "rating" integer
);

INSERT INTO "books" ("title", "author", "year", "pages", "image","rating")
VALUES ('Hitchikers guide' , 'douglas adams', 1974, 1234, 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3454/9780345453747.jpg', 5);