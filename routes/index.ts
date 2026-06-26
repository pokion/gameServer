import express from 'express';
import bodyParser from 'body-parser';

import accounts from './accounts/index.js';
import avatars from './avatars/index.js';
import items from './items/index.js';
import enemies from './enemies/index.js';
import admin from './admin/index.js';

const routes = express.Router();

routes.use(bodyParser.urlencoded({extended: true}));
routes.use(bodyParser.json());

routes.use((req, res, next) => {
    console.log(`Resource requested: ${req.method} ${req.originalUrl}`);
    next();
});

routes.use('/account', accounts);
routes.use('/avatar', avatars);
routes.use('/item', items);
routes.use('/enemy', enemies)
routes.use('/admin', admin)

export default routes;