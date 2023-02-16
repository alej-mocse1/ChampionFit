import { ExerciseDB } from "../../interfaces";
import { Exercise } from "../../models/Exercise";

export const controller = {
    getAllExercise: async () => {
        const allExercise: Promise<ExerciseDB[]> = Exercise.findAll();
        return allExercise
    }
}