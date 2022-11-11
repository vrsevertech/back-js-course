import * as model from './model'
import { Response, Request, query } from 'express'
import { prevNextPageGenerate, pagesNumsGenerate } from './tools'

export async function getBook(req: Request, res: Response) {
    const id = parseInt(req.params.id as string)
    if (id) {    
        try {
            const book = (await model.getBook(id)).rows[0]
            if (book) {
                res.render('./book-page.pug', book)
            } else {
                res.status(404).json({erorr: 'такой книги нет'})
            }
        } catch(err) {
            res.status(500).json(err)
        }
    } else {
        res.status(400).json({error: 'идентификатор должен быть целым числом'})
    }
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
        res.status(404).json({error: 'страница не найдена'})
    }
}

export async function admin(req: Request, res: Response) {
    let offset = parseInt(req.query.offset as string)
    if (!offset || offset < 0) offset = 0
    req.query.offset = offset.toString()
    
    const count = await model.getCountOfBooks(req.query)
    if (offset < count) {
        const books = await model.getBooks({limit: '5', ...req.query})
        const pages = await pagesNumsGenerate(offset, count)
        res.render('./index.pug', {books, pages})
    } else {
        res.status(404).json({error: 'страница не найдена'})
    }
}

export async function addDelBook(req: Request, res: Response) {
    if (req.body.del) {
        await model.markBookAsDel(req.body.del)
    } else {
        await model.addBook({img: req.file?.filename, ...req.body})
    }
    admin(req, res)
}

export async function click(req: Request, res: Response) {
    await model.click(+req.params.id)
    console.log('c')
}

export async function view(req: Request, res: Response) {
    await model.view(+req.params.id)
    console.log('v')
}