import express from 'express';
import boom from 'express-boom-v2';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';
import accessLog from './middlewares/accessLog';
import { errorHandler, notFoundHandler } from './middlewares/error';

const app = express();

app.use(boom());
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(accessLog());

app.use(routes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
