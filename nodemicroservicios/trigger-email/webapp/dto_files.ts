import { trigger } from "@prisma/client"

export type TriggerEmail = {
    from_email: string;
    to_email: string;
    content: string;
}

export type LookEmail = {
    from_email: string;
}
