import { prisma } from "./database";
import { users } from "./index";

async function get_all(){
    return prisma.users.findMany();
}

async function get_by_id(id: number){
    return prisma.users.findUnique({where: {id: Number(id)} });
}

async function add(data: users){
    return prisma.users.create({
        data:data,
    });
}

async function delete_by_Id(id: number){
    return prisma.users.delete({where: {id: Number(id)}});
}

export const users_models = {
    get_all,
    get_by_id,
    add,
    delete_by_Id,
};
