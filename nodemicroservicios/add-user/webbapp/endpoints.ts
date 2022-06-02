// Endpoint Module

import express from "express";
import { Container } from "typedi"

const swaggerDocument = require('./swagger.json'); 
const swaggerUi = require("swagger-ui-express");


const router = express()

router.use(express.json());

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


router.post("/users", (req, res) => 
res.send(

))