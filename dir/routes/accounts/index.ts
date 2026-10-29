import express from "express";

const users = express.Router();

import register from './register.js';
import login from './login.js';
import search from "./search.js";

users.post('/', register);
users.post('/login', login);
users.post('/search', search);

export default users;