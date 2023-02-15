import {Router} from 'express';
import userRoutes from './user';


const router = Router();


//importamos y modularizamos todas la rutas
router.use('/user', userRoutes);


//exportamos las rutas anteriores
export default router;