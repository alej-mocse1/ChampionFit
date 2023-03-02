import {Response, Request , Router} from 'express';
import  {controller}  from './controllers/Exercise';
import { ObjExcerciseTYPE } from '../interfaces'
const ExerciceDB = require('./ExerciceDB.json');

const router = Router();

router.get('/easy', async(req: Request, res: Response) => {
    try {
      const resp : ObjExcerciseTYPE[] = await controller.getAllExerciseEasy()
      res.status(200).send(resp) 
    } catch (error: any) {
        res.status(404).send(error.message)
    }
});


router.get('/mid', async(req: Request, res: Response) => {
    try {
        const resp : ObjExcerciseTYPE[]  = await controller.getAllExerciseMid()
        res.status(200).send(resp)
    } catch (error: any) {
        res.status(404).send(error.message)
    }
});


router.get('/hard', async(req: Request, res: Response) => {
    try {
        const resp : ObjExcerciseTYPE[] = await controller.getAllExerciseHard()
        res.status(200).send(resp)
    } catch (error: any) {
        res.status(404).send(error.message)
    }
});



export default router;