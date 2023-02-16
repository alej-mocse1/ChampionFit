import {Router} from 'express';
import userRoutes from './user';
import exerciseRoute from './exercise';


const router = Router();


//we import and modularize all the routes
router.use('/user', userRoutes);
router.use('/exercise', exerciseRoute);


//we export the previous routes
export default router;