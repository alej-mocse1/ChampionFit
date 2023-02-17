
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


export interface ExerciseDB {
  id?: string,
  name: string,
  image: string,
  description: string,
  time: string
  }
