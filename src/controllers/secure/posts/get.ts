import { Request, Response } from 'express'

const get = (req: Request, res: Response) => {
  res.json({ message: 'create posts' })
}

export default get
