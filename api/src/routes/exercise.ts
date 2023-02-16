import {Response, Request , Router} from 'express';
import { ExerciseDB } from 'interfaces';
import { Exercise } from 'models/Exercise';
import { Optional } from 'sequelize';
import { NullishPropertiesOf } from 'sequelize/types/utils';
import  {controller}  from './controllers/Exercise';
const router = Router();

router.get('/', async(req: Request, res: Response) => {
    try {
        const resp: ExerciseDB[] = await controller.getAllExercise()
        res.status(200).send(resp);
    } catch (error) {
        res.status(404);
        console.error('ERROR: ', error)
    }
});

router.post('/', async(req: Request, res: Response) => {
    const param: Optional<Exercise, NullishPropertiesOf<Exercise>> = req.body;
    try {
        const resp: ExerciseDB = await controller.postExercise(param);
        res.status(200).send(resp);
    } catch (error) {
        
    }
})

export default router;