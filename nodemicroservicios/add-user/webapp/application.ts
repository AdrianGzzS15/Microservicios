// Application Module

// Adrian Gonzalez Saldivar A00827845

// import 'reflect-metadata';

import express from "express";
import { router } from "./endpoints";

const port = 8000;

const app = express();

app.use(express.json());

app.use(router);

app.listen(port, () =>
  console.log(`http://localhost:${port}`)
);