import express from 'express';
import boom from 'express-boom-v2';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import routes from './routes';
import { errorHandler, notFoundHandler } from './middlewares/error';

const app = express();

app.use(boom());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '100mb' })); // as config

app.use(routes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
