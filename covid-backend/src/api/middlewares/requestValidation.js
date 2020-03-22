import logger from '../../utils/logger';

export default (validate, property) => {
  return (req, res, next) => {
    const { error } = validate(req[property]);
    if (!error) {
      next();
    } else {
      logger.error(error);
      res.status(400).json({ ...error });
    }
  };
};
