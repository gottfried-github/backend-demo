import { NextFunction, Request, Response } from 'express'

const validateCreatePost = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.body) {
    res.status(400)

    return res.json({
      message: 'body must exist and be not empty',
      errors: {
        body: 'the field is required and must be not empty',
      },
    })
  }

  return next()
}

export default validateCreatePost
