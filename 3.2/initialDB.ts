import { Client } from 'pg'
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: '1',
    database: 'libcourse',
})

const initialQuery = `

CREATE TABLE IF NOT EXISTS public.books
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 ),
    name character(120) NOT NULL,
    year integer NOT NULL,
    views integer NOT NULL DEFAULT 0,
    clicks integer NOT NULL DEFAULT 0,
    img character(1200),
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.books
    OWNER to postgres;

`

client.connect().then(async () => {
    const res = await client.query(initialQuery)
    await client.end()
})