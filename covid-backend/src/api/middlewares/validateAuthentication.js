import validateGoogleIdToken from '../../services/auth';

export default async (req, res, next) => {
  try {
    const token = req.headers.authorization.replace(/^Bearer /, '');
    req.currentUser = await validateGoogleIdToken(token);
    next();
  } catch (e) {
    return res.boom.unauthorized('Token validation failed');
  }
};
