// Application Modul

// import 'reflect-metadata';

import express from "express";

import {router } from "./endpoints";

const port = 3001;

const app = express();

app.use(express.json());

app.use(router);

app.listen(port, () =>
  console.log(`Server listening on port ${port}:http://localhost:${port}`)
);