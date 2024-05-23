import { NextFunction, Request, Response } from 'express'

export default (e: any, req: Request, res: Response, next: NextFunction) => {
  console.log('error handler, error:', e)

  res.status(500)
  res.json(e)
}
