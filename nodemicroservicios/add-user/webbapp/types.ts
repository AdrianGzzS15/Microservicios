
export { prisma } from "@prisma/client";
export { users_models } from "./models"
export { UserRepository } from "./repositories"
export { User_Services } from "./services"


export type users = {
    id: number;
    email: string
    hashed_password: string
    is_active: boolean
}
  
export type createusers = {
    email: string
    hashed_password: string
  }