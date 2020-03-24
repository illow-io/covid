import logger from '../../utils/logger';

export default (validate, property) => {
  return (req, res, next) => {
    const error = validate(req[property]);
    if (!error) {
      next();
    } else {
      logger.error(error);
      return res.boom.badRequest('Invalid parameters.');
    }
  };
};
