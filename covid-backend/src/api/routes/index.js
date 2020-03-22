import express from 'express';
import health from './health';
import enrichData from './enrich-data';

const app = express();

app.use(health);
app.use(enrichData);

export default app;
