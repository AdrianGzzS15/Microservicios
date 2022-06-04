// Service Module
import { Request, Response, NextFunction } from 'express';
import { UserRepository, LookEmail} from "./types"



// controllers

const get_email_by_id = async (req: Request, res: Response) => {
    let { email } = req.params
    
    try {
        let response = await UserRepository.get_by_id(email);
        //return response;
        return res.status(200).json({
            message: response
        });
    } catch (err) {
        res
            .status(500)
            .json(err)
    }
}

const _trigger = async (req: Request, res: Response) => {

    try{
        let response = await UserRepository._trigger();
        //return response;
        return res.status(200).json({
            message: response
        });
    } catch (err) {
        res
            .status(500)
            .json(err)
    }
}


export const User_Services = {
    get_email_by_id,
    _trigger,
}