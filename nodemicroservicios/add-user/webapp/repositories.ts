//Repositories Module (functions as services)

import { users_models } from "./types"

async function get_all(){
    return await users_models.get_all();
}

async function get_by_id(id: number){
    return await users_models.get_by_id(id);
}

async function add(
    email: string,
    hashed_password: string, 
){
    const data = { email, hashed_password };
    return await users_models.add(data);
}

async function delete_by_id(id:number){
    return await users_models.delete_by_Id(id);
}

export const UserRepository = {
    get_all,
    get_by_id,
    add,
    delete_by_id,
};
