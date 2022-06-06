import { LookEmail, TriggerEmail } from "./dto_files";
import { trigger_models} from "./types"

// services

async function get_by_id(data: LookEmail){
    const from_email = data.from_email
    console.log("repos")
    console.log(data)
    return await trigger_models.get_by_id(String(from_email));
}

async function _trigger(data: TriggerEmail){
    console.log("I am in repo")
    console.log(data)
    return await trigger_models.add(data);
}

export const UserRepository = {
    get_by_id,
    _trigger
};
