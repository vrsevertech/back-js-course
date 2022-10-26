import { Query, QueryResult } from 'pg'
import { db } from '../connectDB'
import { pg as named } from 'yesql'
import { F } from '../types'

const joinAuthors = `join books_authors on books_authors.book = books.id
join authors on authors.id = books_authors.author`

function where(filters:F) {
    let f = `where books.del = false`
    if (filters.author) f += ` and (authors.id = :author)`
    if (filters.year)   f += ` and (books.year = :year)`
    if (filters.search) {
        f += ` and (authors.name like :search or books.name like :search)`
        filters.search = '%' + filters.search + '%'
    }
    return f
}

export async function getBooks(filters:F) {
    const limit = 20
    const q = `select books.id, books.name, string_agg(authors.name, ', ') as authors from books
    ${joinAuthors}
    ${where(filters)}
    group by books.id
    limit :limit offset :offset`
    return (await db.query(named(q)({limit, ...filters}))).rows
}

//!!BUG if http://localhost:3001/?search=c
export async function getCountOfBooks(filters:F) {
    const q = `select count(*) from books
    ${filters.search || filters.author ? joinAuthors : ''}
    ${where(filters)}`
    return (await db.query(named(q)(filters))).rows[0].count as number
}

//book by id
export async function getBook(id: number):Promise<QueryResult<any>> {
    const q = `select books.id, books.name, books.year, string_agg(authors.name, ', ') as authors from books
    join books_authors on books_authors.book = books.id
    join authors on authors.id = books_authors.author
    where books.id = $1
    group by books.id`
    return await db.query(q, [id])
}
