import express from 'express'
import * as controller from './controller'
import multer from 'multer'

export const router = express.Router();

// router.use('/', (req,res)=>{
//     res.render('book-page.pug', { books: [
//       {name: 'one', authors: ['gog','gricha'], year: 1991, clicks: 5},
//       {name: 'two', authors: ['bob', 'tiche'], year: 2020, clicks: 10},
//     ]})
//   })

router.get('/book/:id', controller.getBook)
router.get('/', controller.getBooks)
router.get('/admin', controller.admin)
router.post('/admin', multer({dest: './src/views/imgs'}).single('cover'), controller.addDelBook)
