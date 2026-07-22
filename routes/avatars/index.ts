import express from "express";
import auth from "./../../middleware/auth.js"
import adminAuth from "../../middleware/adminAuth.js"

const users = express.Router();

import getByAccountID from "./getByAccountID.js";
import getByName from "./getByName.js";
import create from "./create.js";
import createWithAllStats from "./createWithAllStats.js";
import search from "./search.js";

users.get('/:accountID',auth ,getByAccountID);
users.get('/:name',auth ,getByName);
users.post('/create',auth ,create);
users.post('/',adminAuth ,createWithAllStats);
users.post('/search' ,search);

export default users;