import { NextFunction, Request, Response } from 'express'

const validateSignin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.password || !req.body.email) {
    res.status(400)

    return res.json({
      message: 'email and password must be provided',
      errors: {
        password: !req.body.password ? 'the field is required' : null,
        email: !req.body.email ? 'the field is required' : null,
      },
    })
  }

  return next()
}

export default validateSignin
