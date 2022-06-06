// Endpoint Module

import express from "express";
import { User_Services } from "./types" 


export const router = express.Router();
const swaggerDocument = require('./swagger.json'); 
const swaggerUi = require("swagger-ui-express");



router.use(express.json())

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    
router.get("/users",User_Services.get_users)
    
router.get("/users/:id",User_Services.get_user_by_id)
    
router.post("/users",User_Services.create_user)

router.delete("/users/:id",User_Services.delete_user_by_id)

router.get("/status", (req, res) => 
    res
        .status(200).send("Ok")
)

