import { prisma, users_models} from "./index"


export class UserRepository{
    
    async get_all(){
        return await users_models.get_all();
    }

    async get_by_id(id: number){
        return await users_models.get_by_id(id);
    }

    async add(
      id: number,
      email: string,
      hashed_password: string,
      is_active: boolean,  
    ){
        const data = {
            id,
            email,
            hashed_password,
            is_active,
        };
        return await users_models.add(data);
    }

    async delete_by_id(id:number){
        return await users_models.delete_by_Id(id);
    }
}