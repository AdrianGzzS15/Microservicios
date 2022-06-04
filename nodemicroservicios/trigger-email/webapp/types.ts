
export { prisma, trigger } from "@prisma/client";
export { trigger_models } from "./models"
export { UserRepository } from "./repositories"
export { User_Services } from "./services"
export { TriggerEmail, LookEmail } from "./dto_files"

  
export type createTrigger = {
    from_email: string;
    to_email: string;
    content: string;
}