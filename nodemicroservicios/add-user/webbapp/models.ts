import { Base } from "./database";


export type Users = {
    id: number;
    email: string;
    hashed_password: string;
    is_active: boolean;
}