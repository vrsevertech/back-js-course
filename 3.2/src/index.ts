import express from 'express'

const app = express()
//app.use(express.static('./views'))
console.log(__dirname)
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.get('/', (req,res)=>{
  res.render('index.pug', { books: [
    {name: 'one', authors: ['gog','gricha'], year: 1991, clicks: 5},
    {name: 'two', authors: ['bob', 'tiche'], year: 2020, clicks: 10},
  ]})
})
app.listen(3001, () => { console.log(`Example app listening`) })
