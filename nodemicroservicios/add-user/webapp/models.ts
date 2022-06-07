//Models module

import { prisma } from "./database";
import { users , createusers} from "./types";


async function get_all(){
    return prisma.users.findMany();
}

async function get_by_id(id: number){
    return prisma.users.findUnique(
        {
            where: {
                id: Number(id)
            }
        }
    );
}

async function add(data: createusers){
    return prisma.users.create({
        data:data,
        select: {
           email: true,
           hashed_password: true,
           id: true,
           is_active: true
       } 
    });
}

async function delete_by_Id(id: number){
    return prisma.users.delete(
        {
            where: {
                id: Number(id)
            }
        }
    );
}

export const users_models = {
    get_all,
    get_by_id,
    add,
    delete_by_Id,
};
