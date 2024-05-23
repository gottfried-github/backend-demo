import { Router } from 'express'

import validateSignup from '../../middleware/validateSignup.js'
import validateSignin from '../../middleware/validateSignin.js'
import signup from '../../controllers/public/auth/signup.js'
import signin from '../../controllers/public/auth/signin.js'

const router = Router()

router.post('/signup', validateSignup, signup)
router.post('/signin', validateSignin, signin)

export default router
