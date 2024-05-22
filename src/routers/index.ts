import { Router } from 'express'
import bodyParser from 'body-parser'

import middlewareAuth from '../middleware/auth.js'
import auth from './public/auth.js'
import users from './secure/users.js'
import posts from './secure/posts.js'

const router = Router()
const _bodyParser = bodyParser.json()

router.use(_bodyParser)
router.use('/auth', auth)
router.use('/users', middlewareAuth, users)
router.use('/posts', middlewareAuth, posts)
router.use('/*', (req, res) => {
  res.status(404)
  return res.json({ message: 'endpoint not found' })
})

export default router
