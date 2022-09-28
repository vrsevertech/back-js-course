CREATE TABLE books
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 ), 
    name character(120) NOT NULL,
    year integer,
    views integer NOT NULL DEFAULT 0,
    clicks integer NOT NULL DEFAULT 0,
    del boolean NOT NULL DEFAULT FALSE,
    PRIMARY KEY (id)
);

CREATE TABLE authors
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 ),
    name character(120) NOT NULL,
    del boolean NOT NULL DEFAULT FALSE,
    PRIMARY KEY (id)
);

CREATE TABLE books_authors
(
    book integer NOT NULL,
    author integer NOT NULL,
    PRIMARY KEY (book, author)
);