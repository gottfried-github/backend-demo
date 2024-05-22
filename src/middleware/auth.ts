import jwt, { VerifyErrors, JwtPayload } from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt

  if (!token) {
    res.status(401)
    return res.json({ message: 'route only accesible to authorized users' })
  }

  try {
    const tokenDecoded: JwtPayload | string | undefined = await new Promise((resolve, reject) => {
      jwt.verify(
        req.cookies.jwt,
        process.env.JWT_ACCESS_SECRET as string,
        async (err: VerifyErrors | null, token: JwtPayload | string | undefined) => {
          if (err) {
            reject(err)
          }
          resolve(token)
        }
      )
    })

    if (!tokenDecoded || typeof tokenDecoded === 'string') {
      return next(new Error('token is not an object with user data'))
    }

    req.user = tokenDecoded
    next()
  } catch (e) {
    res.status(401)
    res.json({ message: 'invalid token' })
  }
}

export default auth
