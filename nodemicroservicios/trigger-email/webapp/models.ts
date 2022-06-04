
import { prisma } from "./database";
import { LookEmail, TriggerEmail } from "./dto_files";
import { trigger , createTrigger} from "./types";

// modelo
async function get_by_id(from_email: LookEmail["from_email"]){
    return prisma.trigger.findMany({where: { from_email: from_email } });
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
