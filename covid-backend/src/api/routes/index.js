import express from 'express';
import health from './health';
import enrichData from './enrich-data';
import uploadData from './uploadData';

const app = express();

app.use(health);
app.use(enrichData);
app.use(uploadData);

export default app;
