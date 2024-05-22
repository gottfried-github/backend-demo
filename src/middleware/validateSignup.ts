import { NextFunction, Request, Response } from 'express'

const validateSignup = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.name || !req.body.password || !req.body.email) {
    res.status(400)

    return res.json({
      message: 'user name and password must be provided',
      errors: {
        name: !req.body.name ? 'the field is required' : null,
        password: !req.body.password ? 'the field is required' : null,
        email: !req.body.email ? 'the field is required' : null,
      },
    })
  }

  return next()
}

export default validateSignup
