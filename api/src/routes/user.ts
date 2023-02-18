import {Response, Request , Router} from 'express';
import { inputUserDB, outputUserDB }  from '../interfaces';
import {  User } from '../models/User';
import { controllerDB } from './controllers/UsersDB';


const router = Router()

//this route is the one that is responsible for returning all the user records through an HTTP_GET request
router.get('/', async(req: Request, res: Response) => {

     try {
      const resp : User[] = await User.findAll();
      res.send(resp)

     } catch (error) {
      console.error("occurred an error in the route: ", error);
     }
   });



//This route is the one that receives the HTTP_POST request to save the information of each user in a new record of the DB
 router.post('/', async (req: Request, res: Response) => {
   
     try {
      const addDB: inputUserDB = req.body;
      const checkErrors : any  = await controllerDB.errorsDB(addDB);
      const resp : outputUserDB = await User.create(checkErrors);
      res.send(resp)

   } catch (error) {
    console.error("occurred an error in the route: ", error);
   }
 });


//This route is in charge of deleting users from the DB   
router.delete('/:id', async (req: Request, res: Response) => {
   
       try {
        const { id } = req.params;
        const resp : string = await controllerDB.DeleteUser(id);
        res.send(resp);
       
     } catch (error) {
      console.error("occurred an error in the route: ", error);
     }
   });
  
 
//This route is in charge of transforming users to premium
router.put('/:id', async (req: Request, res: Response) => {

   try {
      const { id } = req.params;
      const resp : string = await controllerDB.addPremiun(id)
      res.send(resp)
  } catch (error) {
    console.error("occurred an error in the route: ", error);
   }
 })

export default router;