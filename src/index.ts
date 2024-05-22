import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'

import api from './routers/index.js'

const PORT = parseInt(process.env.PORT as string, 10)

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function main() {
  const app = express()

  app.use('api', api)
  app.use('/', express.static(path.join(__dirname, './public')))
  app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/404.html'))
  })

  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
}

main()
