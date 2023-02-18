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

router.get('/:id', async(req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const resp: ExerciseDB | null = await controller.getOneExercise(id);
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
        res.status(404);
        console.error('ERROR: ', error);
    }
});

router.put('/:id', async(req: Request, res: Response) => {
    const { id } = req.params;
    const { name, image, description, time } = req.body;
    let update: ExerciseDB = {id, name, image, description, time};
    try {
        const resp: string = await controller.putExercise(update);
        res.status(200).send(resp);
    } catch (error) {
        res.status(404);
        console.error('ERROR: ', error);
    }
});

router.delete('/:id', async(req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const resp: string = await controller.deleteExercise(id);
        res.status(200).send(resp);
    } catch (error) {
        res.status(404);
        console.error('ERROR: ', error);
    }
})

export default router;