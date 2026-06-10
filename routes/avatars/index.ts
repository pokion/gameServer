import express from "express";
import auth from "./../../middleware/auth.js"

const users = express.Router();

import getByAccountID from "./getByAccountID.js";
import getByName from "./getByName.js";
import create from "./create.js";

users.get('/:accountID',auth ,getByAccountID);
users.get('/:name',auth ,getByName);
users.post('/',auth ,create);

export default users;