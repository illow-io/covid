import 'core-js/stable';
import 'regenerator-runtime/runtime';
import app from './api';
import config from './config';
import logger from './utils/logger';

const {
  app: { name }, port, host, env
} = config.getProperties();

app.listen({ port, host }, () =>
  logger.log(`${name} listening on ${host}:${port} (${env})`));
