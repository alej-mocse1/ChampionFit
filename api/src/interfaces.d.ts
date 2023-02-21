
//This interface is going to be the one that we are going to use to create new user records in the db
export  interface inputUserDB {
    name: string,
    lastName: string,
    email:string
  }


export  interface outputUserDB {
    name: string,
    lastName: string,
    email:string,
    premiun:boolean,
  }


export interface ExerciseType {
  name: string,
  image: string,
  description: string,
  time: Number,
  cantidad:number,
  repeticiones:number,
  }


export interface ObjExcerciseTYPE {
  exercise1:ExerciseType,
  exercise2:ExerciseType,
  exercise3:ExerciseType,
  exercise4:ExerciseType
}

