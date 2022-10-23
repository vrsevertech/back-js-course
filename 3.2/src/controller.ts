import * as userModel from './models/user'
import { Response, Request } from 'express'
import { prevNextPageGenerate } from './tools'
import { F } from './types'

export async function getBook(req: Request, res: Response) {
    const id = req.params.id as unknown as number
    const book = await userModel.getBook(id)
    res.render('./book-page.pug', book.rows[0])
}

export async function getBooks(req: Request, res: Response) {
    const filters:F = req.query as F
    if (!filters.offset || filters.offset < 0) filters.offset = 0
    if (!filters.limit) filters.limit = 20

    if (!filters.limit) filters.limit = 20

    console.log(req.query)

    const count = await userModel.getCountOfBooks(req.query)
    if (filters.offset > count) {
        res.sendStatus(404)
    } else {
        const pages = prevNextPageGenerate(filters.offset as number, count)
        const books = await userModel.getBooks(req.query)
        const rest = new URLSearchParams(filters as Record<string, string>).toString().replace(/offset=[0-9]*/,'')
        res.render('./books-page.pug', { books, pages, rest })
    }
}
