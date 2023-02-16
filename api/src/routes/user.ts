import {Response, Request , Router} from 'express';
import { UserDB }  from '../interfaces';
import {  User } from '../models/User';

import { errorsDB } from './controllers/ErrorsDB'


const router = Router()

//this route is the one that is responsible for returning all the user records through an HTTP_GET request
router.get('/', async(req: Request, res: Response) => {

     try {
      const resp : UserDB[] = await User.findAll();
      res.send(resp)

     } catch (error) {
      console.error("Se ha producido un error:", error);
     }
   });



//This route is the one that receives the HTTP_POST request to save the information of each user in a new record of the DB
 router.post('/', async (req: Request, res: Response) => {
   
    try {
      const addDB = req.body;
      const checkErrors  = await errorsDB(addDB);
      const resp : UserDB = await User.create(addDB);
      res.send(resp)

   } catch (error) {
    console.error("Se ha producido un error:", error);
   }
   });


export default router;