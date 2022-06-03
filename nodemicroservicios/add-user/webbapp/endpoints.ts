// Endpoint Module

import express from "express";
import Container from "typedi";
export const router = express.Router();

const swaggerDocument = require('./swagger.json'); 
const swaggerUi = require("swagger-ui-express");
import { UserServices } from "./services" 

    
    router.use(express.json())
    router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    let user_services = new UserServices();
    
    router.get("/users", (req, res) => 
        res.send (
            

        ) 
    
    )
    
    router.get("/users/:user_id", (req, res) => 
        res.send(
    
        )
    )
    
    router.post("/users", (req, res) => 
        res.send(
    
        )
    )

    router.delete("/users/:user_id", (req, res) => 
        res.send(

        )
    )

    router.get("/status", (req, res) => 
        res.status(200).send("Ok")
    )

