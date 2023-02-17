import { Optional, where } from "sequelize";
import { NullishPropertiesOf } from "sequelize/types/utils";
import { ExerciseDB } from "../../interfaces";
import { Exercise } from "../../models/Exercise";

export const controller = {
    getAllExercise: async (): Promise<ExerciseDB[]> => {
        const allExercise: ExerciseDB[] = await Exercise.findAll();
        return allExercise
    },
    getOneExercise: async (id: string): Promise<ExerciseDB | null> => {
        const exercise: ExerciseDB | null = await Exercise.findOne({
            where: {id: id}
    });
    return exercise;
    },
    postExercise: async (param: Optional<Exercise, NullishPropertiesOf<Exercise>>): Promise<ExerciseDB> => {
        const createExercise: ExerciseDB = await Exercise.create(param);
        return createExercise;
    },
    putExercise: async (param: ExerciseDB): Promise<string> => {
        await Exercise.update({
            name: param.name,
            image: param.image,
            description: param.description,
            time: param.time
        },
        {
            where: {
                id: param.id
            }
        });
        return 'Exercise updated';
    }, 
    deleteExercise: async (id: string): Promise<string> => {
        await Exercise.destroy({
            where: {id: id}
        });
        return 'Exercise deleted';
    }
}