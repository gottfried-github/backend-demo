import { Request, Response } from 'express'

const get = (req: Request, res: Response) => {
  res.json({ message: 'get posts' })
}

export default get
