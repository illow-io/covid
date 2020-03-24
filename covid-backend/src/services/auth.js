import { OAuth2Client } from 'google-auth-library';
import config from '../config';

const CLIENT_ID = config.get('googleClientId');

const client = new OAuth2Client(CLIENT_ID);

export default async function validateGoogleIdToken(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID
  });

  const {
    sub: id,
    email,
    name,
    given_name: givenName,
    family_name: familyName,
    picture,
    locale
  } = ticket.getPayload();

  return { id, email, name, givenName, familyName, picture, locale };
}
