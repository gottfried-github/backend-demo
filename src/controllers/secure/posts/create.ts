import { Request, Response } from 'express'

const create = (req: Request, res: Response) => {
  res.json({ message: 'create post' })
}

export default create
