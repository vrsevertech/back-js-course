import * as model from './model'
import { Response, Request, query } from 'express'
import { prevNextPageGenerate } from './tools'

export async function getBook(req: Request, res: Response) {
    const id = req.params.id as unknown as number
    const book = await model.getBook(id)
    res.render('./book-page.pug', book.rows[0])
}

export async function getBooks(req: Request, res: Response) {
    let offset = parseInt(req.query.offset as string)
    if (!offset || offset < 0) offset = 0
    req.query.offset = offset.toString()

    const count = await model.getCountOfBooks(req.query)
    if (offset < count) {
        const pages = prevNextPageGenerate(offset, count)
        const books = await model.getBooks({limit: '20', ...req.query})
        const rest = new URLSearchParams(req.query as Record<string, string>).toString().replace(/offset=[0-9]*/,'')
        res.render('./books-page.pug', { books, pages, rest })
    } else {
        res.sendStatus(404)
    }
}

export async function admin(req: Request, res: Response) {
    let offset = parseInt(req.query.offset as string)
    if (!offset || offset < 0) offset = 0
    req.query.offset = offset.toString()
    
    const count = await model.getCountOfBooks(req.query)
    if (offset < count) {
        const books = await model.getBooks({limit: '5', ...req.query})
        res.render('./index.pug', {books, pages: Math.ceil(count/5)})
    } else {
        res.sendStatus(404)
    }
}

export async function addBook(req: Request, res: Response) {
    await model.addBook({img: req.file?.filename, ...req.body})
    admin(req, res)
}

export async function delBook(req: Request, res: Response) {
    const r = await model.delBook(req.query.id as string)
    admin(req, res)
}
