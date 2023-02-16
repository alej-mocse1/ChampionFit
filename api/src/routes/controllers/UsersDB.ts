import { UserDB }  from '../../interfaces';
import { User } from "../../models/User";


export const controllerDB = {
    
//This function validates the types of data that reach us by body in the route http://localhost:3001/api/user
  errorsDB : (param : UserDB): UserDB => {
       if(typeof param.name != 'string')throw new Error('the name property must be of type string');
       if(param.name.length > 59)throw new Error('the name property must be less than 60 characters');
       if(param.name.length < 4)throw new Error('property name must be longer than 4 characters');

       if(typeof param.lastName != 'string')throw new Error('the lastName property must be of type string');
       if(param.lastName.length > 59)throw new Error('the lastName property must be less than 60 characters');
       if(param.lastName.length < 4)throw new Error('property lastName must be longer than 4 characters');

       if(typeof param.email != 'string')throw new Error('the email property must be of type string')
       if(param.email.length > 74)throw new Error('the email property must be less than 75 characters');
       if(param.email.length < 4)throw new Error('property email must be longer than 4 characters');
    
       return param;
    },
 

  DeleteUser : async (id : string) : Promise<string> => {
     const resp = await User.destroy({
          where: {id: id}
      });
    
    return 'delete string';
   }
 
}