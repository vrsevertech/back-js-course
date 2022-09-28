import { db } from './connectDB'

// select books by limit and offset
async function getBooks(offset, limit = 10) {
    const q = `select books.name, string_agg(authors.name, ', ') as authors from books
    join books_authors on books_authors.book = books.id
    join authors on authors.id = books_authors.author
    and books.del = false
    group by books.name
    limit $1 offset $2`
    return await db.query(q, [limit, offset])
}

//search 
async function search(query) {
    const q = `select books.name, string_agg(authors.name, ', ') as authors from books
    join books_authors on books_authors.book = books.id
    join authors on authors.id = books_authors.author 
    where authors.name like '$1' or books.name like '$1'
    group by books.name`
    return await db.query(q, [query])
}

//author
async function getBooksByAuthor(id) {
    const q = `select books.name, string_agg(authors.name, ', ') as authors from books
    join books_authors on books_authors.book = books.id
    join authors on authors.id = books_authors.author
    where authors.id = $1
    group by books.name`
    return await db.query(q, [id])
}

//year
async function getBooksByYear(year) {
    const q = `select books.name, string_agg(authors.name, ', ') as authors from books
    join books_authors on books_authors.book = books.id
    join authors on authors.id = books_authors.author
    where books.year = $1
    group by books.name`
    return await db.query(q, [year])

}

//book by id
async function getBook(id) {
    const q = `select books.name, string_agg(authors.name, ', ') as authors from books
    join books_authors on books_authors.book = books.id
    join authors on authors.id = books_authors.author
    where books.id = $1
    group by books.name`
    return await db.query(q, [id])
}
