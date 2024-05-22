import { Router } from 'express'

import create from '../../controllers/secure/posts/create.js'
import get from '../../controllers/secure/posts/get.js'

const router = Router()

router.get('/', create)
router.post('/', get)

export default router
