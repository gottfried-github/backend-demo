import { Signup as SignupInterface, Signin as SigninInterface } from '../types/payload/user.js'
import User from '../models/user.js'

import { generateHash, isEqualHash } from '../utils/index.js'

export default {
  create: (data: SignupInterface) => {
    const password = generateHash(data.password)

    return User.create({ ...data, password })
  },
  async getAndValidate({ email, password }: SigninInterface) {
    const user = await User.findOne({ email })

    if (!user) return null

    if (!isEqualHash(user.password, password)) return false

    return user
  },
}
