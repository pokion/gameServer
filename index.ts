import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';

const port = 3000;
const app = express();

app.use(cookieParser());

app.listen(port);

console.log(`Api started on port ${port}`);