// Service Module
import { Request, Response, NextFunction } from 'express';
import { v4 } from "uuid"
import { UserRepository } from "./types"



// controllers



const get_users = async (req: Request, res: Response) =>{
    try{
        let response = await UserRepository.get_all();
        return response;
    } catch (err){
        res
            .status(500)
            .json(err)
    }
}

const get_user_by_id = async (req: Request, res: Response) => {
    let { id } = req.params
    try {
        let response = await UserRepository.get_by_id(Number(id));
        return response;
        // return res.status(200).json({
        //     response
        // });
    } catch (err) {
        res
            .status(500)
            .json(err)
    }
}


const create_user = async (req: Request, res: Response) => {

    let uuid = v4();
    const email = uuid + "@email.com"
    const password = "pwd"
    try{
        let response = await UserRepository.add(email, password);
        return response;
    } catch (err) {
        res
            .status(500)
            .json(err)
    }
}

const delete_user_by_id = async (req: Request, res: Response) => {
    let { id } = req.params;
    try {
        let response = await UserRepository.delete_by_id(Number(id));
        return response
    } catch (err) {
        res
            .status(500)
            .json(err)
    }
} 


export const User_Services = {
    get_user_by_id,
    get_users,
    create_user,
    delete_user_by_id,
}