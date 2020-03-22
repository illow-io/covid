import express from 'express';
import health from './health';

const app = express();

app.use(health);

export default app;
