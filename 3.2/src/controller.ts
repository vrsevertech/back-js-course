import * as userModel from './models/user'
import { Response, Request, query } from 'express'
import { prevNextPageGenerate } from './tools'

export async function getBook(req: Request, res: Response) {
    const id = req.params.id as unknown as number
    const book = await userModel.getBook(id)
    res.render('./book-page.pug', book.rows[0])
}

export async function getBooks(req: Request, res: Response) {
    let offset = parseInt(req.query.offset as string)
    if (!offset || offset < 0) offset = 0
    req.query.offset = offset.toString()

    const count = await userModel.getCountOfBooks(req.query)
    console.log(count, offset)
    if (offset > count) {
        res.sendStatus(404)
    } else {
        const pages = prevNextPageGenerate(offset, count)
        const books = await userModel.getBooks(req.query)
        const rest = new URLSearchParams(req.query as Record<string, string>).toString().replace(/offset=[0-9]*/,'')
        res.render('./books-page.pug', { books, pages, rest })
    }
}
