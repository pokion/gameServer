import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import adminAuth from "./../middleware/adminAuth.js";

import routes from './routes/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const route = express.Router();

route.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

route.get('/panel', adminAuth, (req,res)=>{
    res.sendFile(__dirname + '/panel.html')
})

route.use('/', routes);

route.use(bodyParser.urlencoded({extended: true}));
route.use(bodyParser.json());

route.use((req, res, next) => {
    console.log(`Resource requested @Admin Panel: ${req.method} ${req.originalUrl}`);
    next();
});


export default route;