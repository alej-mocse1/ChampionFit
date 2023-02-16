import { Optional } from "sequelize";
import { NullishPropertiesOf } from "sequelize/types/utils";
import { ExerciseDB } from "../../interfaces";
import { Exercise } from "../../models/Exercise";

export const controller = {
    getAllExercise: async () => {
        const allExercise: Promise<ExerciseDB[]> = Exercise.findAll();
        return allExercise
    },
    postExercise: async(param: Optional<Exercise, NullishPropertiesOf<Exercise>>) => {
        const createExercise: Promise<ExerciseDB> = Exercise.create(param);
        return createExercise;
    }
}