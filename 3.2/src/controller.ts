import * as userModel from './models/user'
import { Response, Request, query } from 'express'
import { prevNextPageGenerate } from './tools'
import { F } from './types'
import { convertCompilerOptionsFromJson } from 'typescript'

export async function getBook(req: Request, res: Response) {
    const id = req.params.id as unknown as number
    const book = await userModel.getBook(id)
    res.render('./book-page.pug', book.rows[0])
}


export async function getBooks(req: Request, res: Response) {
    let offset = parseInt(req.query.offset as string)
    let limit = parseInt(req.query.limit as string)
    if (!offset || offset < 0) offset = 0
    if (!limit || limit < 0) limit = 20

    const count = await userModel.getCountOfBooks(req.query)
    if (offset > count) {
        res.sendStatus(404)
    } else {
        const pages = prevNextPageGenerate(offset, count)
        const books = await userModel.getBooks({limit, ...req.query})
        const rest = new URLSearchParams(req.query as Record<string, string>).toString().replace(/offset=[0-9]*/,'')
        res.render('./books-page.pug', { books, pages, rest })
    }
}
