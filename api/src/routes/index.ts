import {Router} from 'express';
import userRoutes from './user';


const router = Router();


//we import and modularize all the routes
router.use('/user', userRoutes);


//we export the previous routes
export default router;