import express from 'express'
import * as controller from './controller'
import multer from 'multer'
import basicAuth from 'express-basic-auth'

export const router = express.Router();

// router.use('/', (req,res)=>{
//     res.render('book-page.pug', { books: [
//       {name: 'one', authors: ['gog','gricha'], year: 1991, clicks: 5},
//       {name: 'two', authors: ['bob', 'tiche'], year: 2020, clicks: 10},
//     ]})
//   })

router.get('/book/:id', controller.getBook)
router.get('/', controller.getBooks)

router.use('/admin', (basicAuth({users: {'u': 'p'}, challenge: true})))
router.get('/logout', controller.logout)
router.get('/admin', controller.admin)
router.post('/admin', multer({dest: './src/views/imgs'}).single('cover'), controller.addDelBook)

router.post('/api/view/:id', controller.view)
router.post('/api/click/:id', controller.click)