import express from "express";
import adminAuth from "./../../middleware/adminAuth.js"

const users = express.Router();

import create from "./create.js";
import update from "./update.js";
import remove from "./remove.js";

users.post('/',adminAuth ,create);
users.patch('/',adminAuth ,update);
users.delete('/',adminAuth ,remove);


export default users;