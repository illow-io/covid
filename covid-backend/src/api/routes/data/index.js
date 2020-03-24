import express from 'express';
import enrich from './enrich';
import upload from './upload';

const app = express();

app.use('/enrich', enrich);
app.use('/upload', upload);

export default app;
