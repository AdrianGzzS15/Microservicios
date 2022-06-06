// Service Module
import { Request, Response, NextFunction } from 'express';
import { UserRepository, LookEmail, TriggerEmail} from "./types"



// controllers

const get_email_by_id = async (req: Request, res: Response) => {
    let { email } = req.params
    console.log("services")
    console.log(req.params)
    console.log(email)
    let obj:LookEmail = {
        from_email: email
    };
    try {
        let response = await UserRepository.get_by_id(obj);
        //return response;
        return res.status(200).json(response);
    } catch (err) {
        res
            .status(500)
            .json(err)
    }
}

const _trigger = async (req: Request, res: Response) => {

    console.log(req.body)

    const triggeremail:TriggerEmail = req.body

    try{
        let response = await UserRepository._trigger(triggeremail);
        //return response;
        console.log("im in sevices again")
        console.log(response)
        return res.status(200).json(response);
    } catch (err) {
        console.log("estoy en err")
        res
            .status(500)
            .json(err)
    }
}


export const User_Services = {
    get_email_by_id,
    _trigger,
}