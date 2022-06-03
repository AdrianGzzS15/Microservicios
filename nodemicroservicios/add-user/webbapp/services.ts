// Service Module

import { v4 } from "uuid"
import { UserRepository } from "./index"




export class UserServices {

   user_repository: UserRepository[];

   constructor() {
       this.user_repository = []; 
   }

   get_users(){
       return 
   }

   get_user_by_id(){

   }

   create_user(){
        const uuid = v4()
        return this.user_repository
   }

   delete_user_by_id(){

   }
   
}