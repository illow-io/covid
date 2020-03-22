import validateGoogleIdToken from '../../services/auth';

export const validateAuthentication = async (req, _res, next) => {
  try {
    const token = req.headers.authorization.replace(/^Bearer /, '');
    req.currentUser = await validateGoogleIdToken(token);
    next();
  } catch (e) {
    throw new Error('Token validation failed');
  }
};
