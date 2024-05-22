import { Router } from 'express'
import bodyParser from 'body-parser'

import middlewareAuth from '../middleware/auth'
import auth from './public/auth'
import users from './secure/users'
import posts from './secure/posts'

const router = Router()
const _bodyParser = bodyParser.json()

router.use(_bodyParser)
router.use('auth', auth)
router.use('users', middlewareAuth, users)
router.use('posts', middlewareAuth, posts)

export default router
