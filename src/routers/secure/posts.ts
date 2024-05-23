import { Router } from 'express'

import validateCreatePost from '../../middleware/validateCreatePost.js'
import create from '../../controllers/secure/posts/create.js'
import get from '../../controllers/secure/posts/get.js'

const router = Router()

router.get('/', get)
router.post('/', validateCreatePost, create)

export default router
