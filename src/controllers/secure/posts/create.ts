import mongoose from 'mongoose'
import { NextFunction, Request, Response } from 'express'

import Post from '../../../models/post.js'

const create = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) return next(new Error('no req.user'))

  try {
    const post = await Post.create({ createdBy: req.user.id, body: req.body.body })

    res.status(201)
    res.json({ message: 'created post', data: post })
  } catch (e) {
    if (e instanceof mongoose.Error.ValidationError) {
      res.status(400)
      return res.json({ message: 'validation error', error: e })
    }

    next(e)
  }
}

export default create
