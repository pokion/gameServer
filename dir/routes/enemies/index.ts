import express from "express";
import adminAuth from "../../middleware/adminAuth.js"
import auth from "./../../middleware/auth.js"

const users = express.Router();

import create from "./create.js";
import remove from "./remove.js";
import update from "./update.js";
import search from "./search.js";

users.post('/',adminAuth ,create);
users.delete('/',adminAuth ,remove);
users.patch('/',adminAuth ,update);
users.post('/search',auth ,search);

export default users;