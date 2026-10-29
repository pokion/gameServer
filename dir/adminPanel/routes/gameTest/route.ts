import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import adminAuth from "./../../../middleware/adminAuth.js"

const __dirname = dirname(fileURLToPath(import.meta.url));

const route = express.Router();

route.get('/', adminAuth, (req,res)=>{
    res.sendFile(__dirname + '/gameTest.html')
})

route.get('/main.js', adminAuth, (req,res)=>{
    res.sendFile(__dirname + '/main.js')
})

export default route;