import { User as UserInterface } from '../types/payload/user.js'
import User from '../models/user.js'

import { generateHash, isEqualHash } from '../utils/index.js'

export default {
  create: (data: UserInterface) => {
    const password = generateHash(data.password)

    return User.create({ ...data, password })
  },
}
