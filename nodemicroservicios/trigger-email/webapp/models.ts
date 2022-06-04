
import { prisma } from "./database";
import { TriggerEmail } from "./dto_files";
import { trigger , createTrigger} from "./types";

// modelo
async function get_by_id(email: string){
    return prisma.users.findUnique({where: {email: String(email)} });
}

async function add(data: createTrigger){
    return prisma.trigger.create({
        data:data,
        select: {
           from_email: true,
           to_email: true,
           content: true,
           id: true, 
       } 
    });
}


export const trigger_models = {
    get_by_id,
    add,
};
