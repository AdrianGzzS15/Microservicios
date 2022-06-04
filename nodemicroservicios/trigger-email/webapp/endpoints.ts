// Endpoint Module

import express from "express";
import { User_Services } from "./types" 


export const router = express.Router();
const swaggerDocument = require('./swagger.json'); 
const swaggerUi = require("swagger-ui-express");



router.use(express.json())

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    
router.get("/email/:email",User_Services.get_email_by_id)
        
router.post("/email",User_Services._trigger)


