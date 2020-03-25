import validateGoogleIdToken from '../../services/auth';
import logger from '../../utils/logger';

export default async (req, res, next) => {
  try {
    const token = req.headers.authorization.replace(/^Bearer /, '');
    req.currentUser = await validateGoogleIdToken(token);
    next();
  } catch (e) {
    logger.error(e.stack);
    return res.boom.unauthorized('Token validation failed');
  }
};
