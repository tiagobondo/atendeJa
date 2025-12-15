import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

//routes
import indexRouter from './routes/index';

const app = express()
app.use(express.json())
app.use(express.urlencoded({  extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/', indexRouter);

export default app