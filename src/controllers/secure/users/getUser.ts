import { NextFunction, Request, Response } from 'express'

import User from '../../../models/user.js'

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findById(req.params.id, { password: 0 })

    if (!user) {
      res.status(404)
      return res.json({ message: 'user not found' })
    }

    res.json({ message: 'user found', data: user })
  } catch (e) {
    next(e)
  }
}
