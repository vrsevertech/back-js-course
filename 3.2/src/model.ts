import { Query, QueryResult } from 'pg'
import { db } from './connectDB'
import { pg as named } from 'yesql'
import { F } from './types'

const selectBooks = `select books.id, books.name, books.img, books.clicks, string_agg(authors.name, ', ') as authors from books`
const joinAuthors = `left join books_authors on books_authors.book = books.id
left join authors on authors.id = books_authors.author`

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
    const q = `${selectBooks}
    ${joinAuthors}
    ${where(filters)}
    group by books.id
    order by books.id
    limit :limit offset :offset`
    return (await db.query(named(q)(filters))).rows
}

export async function getCountOfBooks(filters:F) {
    const q = `select count(distinct books.id) from books
    ${filters.search || filters.author ? joinAuthors : ''}
    ${where(filters)}`
    return (await db.query(named(q)(filters))).rows[0].count as number
}

export async function getBook(id: number):Promise<QueryResult<any>> {
    const q = `${selectBooks}
    ${joinAuthors}
    where books.id = $1
    group by books.id`
    return await db.query(q, [id])
}

export async function delBook(id: string) {
    const q = `update books set del=true where id=$1`
    return await db.query(q, [id])
}

export async function addBook(book: {
    name:string, 
    authors:string[], 
    year:number,
    img:string,
}) {
    const bookId = (await db.query(named(`insert into books (name, year, img) values (:name, :year, :img) returning id`)(book))).rows[0].id
    book.authors.forEach(async (author) => {
        if (author) {
            const authorId = (await db.query(named(`insert into authors (name) values (:author) returning id`)({author}))).rows[0].id
            await db.query(named(`insert into books_authors (book, author) values (:bookId, :authorId)`)({bookId, authorId}))
        }
    })
}
