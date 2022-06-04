import { LookEmail } from "./dto_files";
import { trigger_models} from "./types"

// services

async function get_by_id(from_email: string){
    return await trigger_models.get_by_id(from_email);
}

async function _trigger(
    from_email: string,
    to_email: string,
    content: string
){
    const data = { from_email, to_email, content };
    return await trigger_models.add(data);
}

export const UserRepository = {
    get_by_id,
    _trigger
};
