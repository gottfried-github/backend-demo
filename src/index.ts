import path from 'path'
import { fileURLToPath } from 'url'
import mongoose from 'mongoose'
import express from 'express'

import api from './routers/index.js'

const PORT = parseInt(process.env.PORT as string, 10)

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function main() {
  // connect to databases
  await mongoose.connect(
    `mongodb://${process.env.APP_DB_USER}:${process.env.APP_DB_PASS}@${process.env.NET_NAME}/${process.env.APP_DB_NAME}`
  )

  /* set up apps */
  const app = express()

  app.use('/api', api)
  app.use('/', express.static(path.join(__dirname, './public')))
  app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/404.html'))
  })

  // start server
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
}

main()
