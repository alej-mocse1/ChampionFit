import { Optional, where } from "sequelize";
import { NullishPropertiesOf } from "sequelize/types/utils";
import { ExerciseDB } from "../../interfaces";
import { Exercise } from "../../models/Exercise";

export const controller = {
    getAllExercise: async () => {
        const allExercise: ExerciseDB[] = await Exercise.findAll();
        return allExercise
    },
    getOneExercise: async (id: string) => {
        const exercise: ExerciseDB | null = await Exercise.findOne({
            where: {id: id}
    });
    return exercise;
    },
    postExercise: async (param: Optional<Exercise, NullishPropertiesOf<Exercise>>) => {
        const createExercise: ExerciseDB = await Exercise.create(param);
        return createExercise;
    },
    putExercise: async (param: ExerciseDB) => {
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
    }
}