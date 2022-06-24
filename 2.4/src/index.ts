import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import session from 'express-session'
import sfs from 'session-file-store'
import { collection, DBConnect } from './DBConnect'
import * as DBTools from './DBTools'

// https://github.com/expressjs/session/issues/799#issuecomment-743949087
declare module "express-session" {
  interface SessionData {
    login: string
  }
}

const FileStore = sfs(session)
const app = express()
const port = 8000

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('static'))
app.use(session({
    store: new FileStore({}),
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}))

app.post('/api/v2/router', async (req, res) => {
  switch (req.query.action) {
    case 'login':
      if (await DBTools.auth(req.body)) {
        req.session.login = req.body.login
        res.send({ok: true})
      } else {
        res.status(400).json({error: 'not found'})
      }
      break

    case 'logout':
      req.session.login = undefined
      res.send({ok: true})
      break

    case 'register':
      let result = await DBTools.addUser(req.body)
      req.session.login = req.body.login
      res.send({'ok': result})
      break

    case 'getItems':
      req.session.login ? res.send(await DBTools.getItems(req.session.login)) : res.status(400).json({error: 'forbidden'})
      break

    case 'deleteItem':
      req.session.login ? res.send(await DBTools.deleteItem(req.session.login, req.body)) : res.send(400)
      break

    case 'createItem':
      req.session.login ? res.send(await DBTools.addItem(req.session.login, req.body)) : res.send(403)
      break

    case 'editItem':
      req.session.login ? res.send(await DBTools.updateItem(req.session.login, req.body)) : res.send(403)
      break
  
    default:
      break
  }  
})

DBConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  })
  .catch((error: Error) => {
      console.error("Database connection failed", error);
      process.exit();
  });
