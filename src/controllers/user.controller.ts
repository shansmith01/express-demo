import { NextFunction, Request, Response } from 'express'

import createUser from '../services/user.service'
export const userController = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req)
  if (!req.is('application/json')) {
    res.status(200).json({ data: { message: 'Invalid content type' } })
  }

  try {
    const response = await createUser(req.body.id)
    res.statusCode = 200
    res.json(response)
  } catch (error) {
    next(error)
  }
}
