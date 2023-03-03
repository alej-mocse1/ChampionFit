const ExerciceDB = require('../ExerciceDB.json');
import { ObjExcerciseTYPE  } from '../../interfaces';

export const controller = {


    getAllExerciseEasy:  () : ObjExcerciseTYPE[] => {

    const resp : ObjExcerciseTYPE[] = []

    resp.push(ExerciceDB.easy.day1)
    resp.push(ExerciceDB.easy.day2)
    resp.push(ExerciceDB.easy.day3)
    resp.push(ExerciceDB.easy.day4)
    resp.push(ExerciceDB.easy.day5)

    return resp
     
    },

    getAllExerciseMid:  () : ObjExcerciseTYPE[]  => {

    const resp2 : ObjExcerciseTYPE[] = [];
    
    
    resp2.push(ExerciceDB.mid.day1)
    resp2.push(ExerciceDB.mid.day2)
    resp2.push(ExerciceDB.mid.day3)
    resp2.push(ExerciceDB.mid.day4)
    resp2.push(ExerciceDB.mid.day5)

    return resp2
    },

        
    getAllExerciseHard:  () : ObjExcerciseTYPE[]  => {

    const resp3 : ObjExcerciseTYPE[] = []
        
    resp3.push(ExerciceDB.hard.day1)
    resp3.push(ExerciceDB.hard.day2)
    resp3.push(ExerciceDB.hard.day3)
    resp3.push(ExerciceDB.hard.day4)
    resp3.push(ExerciceDB.hard.day5)
        
    return resp3         
    }
        

}