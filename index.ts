import 'dotenv/config';
import express from 'express';
import routes from './routes/index.js';
import cookieParser from 'cookie-parser';
import adminRoute from './adminPanel/index.js';

const port = 3000;
const app = express();

app.use(cookieParser());
app.use('/api', routes);
app.use('/adminPanel', adminRoute);
app.use('/static', express.static('static'))

app.listen(port);

console.log(`Api started on port ${port}`);