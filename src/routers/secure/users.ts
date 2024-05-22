import { Router } from 'express'

import getUser from '../../controllers/secure/users/getUser.js'

const router = Router()

router.get('/:id', getUser)

export default router
