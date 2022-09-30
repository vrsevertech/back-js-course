import express from 'express'
import { router } from './src/router'

const app = express()
app.use(express.static('./views'))
console.log(__dirname)
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.get('/', router)
app.listen(3001, () => { console.log(`Example app listening`) })
