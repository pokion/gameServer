import express from "express";
import adminAuth from "../../middleware/adminAuth.js"

const users = express.Router();

import create from "./create.js";
import remove from "./remove.js";
import update from "./update.js";

users.post('/',adminAuth ,create);
users.delete('/',adminAuth ,remove);
users.patch('/',adminAuth ,update);

export default users;