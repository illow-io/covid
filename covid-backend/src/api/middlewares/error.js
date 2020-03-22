import logger from '../../utils/logger';

/**
 * @function errorHandler Handles app errors and responds with standard format
 */
export const errorHandler = (err, _req, res, _next) => {
  logger.error(err.stack);
  if (err.failedValidation) {
    res.boom.badData('Unprocessable');
  } else {
    res.boom.badImplementation(err.message);
  }
};

/**
 * @function notFoundHandler Responds a 404 status when route is not found
 */
export const notFoundHandler = (req, res, next) => {
  if (!req.route) {
    res.boom.notFound();
  } else {
    next();
  }
};
