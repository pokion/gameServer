import express from "express";

const routes = express.Router();

import gameTest from './gameTest/route.js';

routes.use('/gameTest', gameTest);

export default routes;