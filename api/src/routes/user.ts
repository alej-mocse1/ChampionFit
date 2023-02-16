import {Response, Request , Router} from 'express';
import { UserDB }  from '../interfaces';
import {  User } from '../models/User';
import { controllerDB } from './controllers/UsersDB';


const router = Router()

//this route is the one that is responsible for returning all the user records through an HTTP_GET request
router.get('/', async(req: Request, res: Response) => {

     try {
      const resp : UserDB[] = await User.findAll();
      res.send(resp)

     } catch (error) {
      console.error("occurred an error in the route: ", error);
     }
   });



//This route is the one that receives the HTTP_POST request to save the information of each user in a new record of the DB
 router.post('/', async (req: Request, res: Response) => {
   
     try {
      const addDB = req.body;
      const checkErrors : UserDB  = await controllerDB.errorsDB(addDB);
      console.log(checkErrors)
      const resp : UserDB = await User.create(addDB);
      res.send(resp)

   } catch (error) {
    console.error("occurred an error in the route: ", error);
   }
 });


   
router.delete('/:id', async (req: Request, res: Response) => {
   
       try {
        const { id } = req.params;
        const resp : string = await controllerDB.DeleteUser(id);
        res.send(resp);
       
     } catch (error) {
      console.error("occurred an error in the route: ", error);
     }
   });
  


export default router;