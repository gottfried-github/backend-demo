import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'

import UserService from '../../../services/user.js'

const signin = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getAndValidate(req.body)

    if (user === null) {
      res.status(404)
      return res.json({ message: "user with given email doesn't exist" })
    }

    if (user === false) {
      res.status(400)
      return res.json({ message: 'password is incorrect' })
    }

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

    res.status(200)
    res.json({
      message: 'signed in successfully',
      data: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    })
  } catch (e) {
    console.log('signin, error:', e)

    res.status(500)
    return res.send({ message: 'internal error' })
  }
}

export default signin
