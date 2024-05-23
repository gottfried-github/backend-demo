import { NextFunction, Request, Response } from 'express'

import Post from '../../../models/post.js'

const get = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) return next(new Error('no req.user'))

  try {
    const posts = await Post.find({ createdBy: req.user.id })

    res.json({ message: 'found posts', data: posts })
  } catch (e) {
    next(e)
  }
}

export default get
