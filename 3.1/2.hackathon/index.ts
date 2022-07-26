import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { B } from './e'
const app = express()
const port = 3000
let p = 0
let m = 0

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('static'))

app.post('/api', (req, res) => {
  if (req.body.b == B.plus) {
    res.send('' + ++p)
  } else {
    res.send('' + ++m)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})