import * as userModel from './models/user'
import { Response, Request } from 'express'

export async function getBook(req: Request, res: Response) {
    const id = req.params.id as unknown as number
    const book = await userModel.getBook(id)
    res.render('./book-page.pug', book.rows[0])
}