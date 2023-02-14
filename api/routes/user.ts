import {Response, Request, NextFunction, Router} from 'express';
import { sequelize } from '../src/db';
const {User} = sequelize.models
const router = Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    User.findAll()
     .then((users: any) => {
      res.send(users);
     })
     .catch((error: any) => next(error));
   });
   
   router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;
    User.create(user)
     .then((createdUser: any) => {
      res.send(createdUser);
     })
     .catch((error: any) => next(error));
   });

export default router;