import jwt from 'jsonwebtoken'

import UserService from '../../../services/user.js'
import { Request, Response } from 'express'

const signup = async (req: Request, res: Response) => {
  try {
    const user = await UserService.create(req.body)

    const accessToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_ACCESS_SECRET as string,
      {
        expiresIn: parseInt(process.env.JWT_ACCESS_EXPIRE as string, 10),
      }
    )

    res.cookie('jwt', accessToken, {
      httpOnly: true,
      // secure: true,
      // sameSite: 'none',
      maxAge: parseInt(process.env.JWT_ACCESS_EXPIRE as string) * 1000,
    })

    res.status(201)
    res.json({ message: 'signed up successfully' })
  } catch (e) {
    res.status(500)
    res.json(e)
  }
}

export default signup
