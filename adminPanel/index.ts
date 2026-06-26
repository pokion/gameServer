import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const routes = express.Router();

routes.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

routes.use(bodyParser.urlencoded({extended: true}));
routes.use(bodyParser.json());

routes.use((req, res, next) => {
    console.log(`Resource requested @Admin Panel: ${req.method} ${req.originalUrl}`);
    next();
});


export default routes;