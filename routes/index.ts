import express from 'express';
import bodyParser from 'body-parser';

const routes = express.Router();

routes.use(bodyParser.urlencoded({extended: true}));
routes.use(bodyParser.json());

routes.use((req, res, next) => {
    console.log(`Resource requested: ${req.method} ${req.originalUrl}`);
    next();
});

export default routes;