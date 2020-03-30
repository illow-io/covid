import logger from '../../utils/logger';

/**
 * @function errorHandler Handles app errors and responds with standard format
 */
export const errorHandler = (err, _req, res, _next) => {
  logger.error(err.stack);
  if (err.failedValidation) {
    logger.error('validation failed: unpocessable data');
    res.boom.badData('Unprocessable');
  } else {
    logger.error('bad implementation: ', err.message);
    res.boom.badImplementation(err.message);
  }
};

/**
 * @function notFoundHandler Responds a 404 status when route is not found
 */
export const notFoundHandler = (req, res, next) => {
  if (!req.route) {
    logger.error('route not found');
    res.boom.notFound();
  } else {
    next();
  }
};
