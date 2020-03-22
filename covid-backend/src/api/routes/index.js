import express from 'express';
import health from './health';
import uploadData from './uploadData';

const app = express();

app.use(health);
app.use(uploadData);

export default app;
