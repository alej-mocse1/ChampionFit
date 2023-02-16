import {Response, Request , Router} from 'express';
import { ExerciseDB } from 'interfaces';
import  {controller}  from './controllers/Exercise';
const router = Router();

router.get('/', async(req: Request, res: Response) => {
    try {
        const resp: ExerciseDB[] = await controller.getAllExercise()
        res.status(200).send(resp);
    } catch (error) {
        res.status(404);
        console.error('Error: ', error)
    }
});

export default router;