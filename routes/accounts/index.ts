import express from "express";

const users = express.Router();

import register from './register.js';
import login from './login.js';

users.post('/', register);
users.post('/login', login);

export default users;