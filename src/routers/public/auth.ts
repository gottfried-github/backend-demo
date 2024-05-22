import { Router } from 'express'

import validateSignup from '../../middleware/validateSignup.js'
import signup from '../../controllers/public/auth/signup.js'

const router = Router()

router.post('/signup', validateSignup, signup)
router.post('/signin', () => {})

export default router
