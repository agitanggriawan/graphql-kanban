const jwt = require('jsonwebtoken');

const generateToken = (data) => {
  return jwt.sign(data, 'mysecrethash', { expiresIn: '1y' });
};

const generateUniqueId = () => {
  const { customAlphabet } = require('nanoid/non-secure');
  const nanoid = customAlphabet(
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    10
  );

  return nanoid();
};

const extractJwtToken = (token) => {
  if (token.trim().match(/^Bearer/i)) {
    const t = token.split(/\s+/)[1];
    return t.trim();
  }
  return null;
};

const authorizeToken = (req) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = extractJwtToken(authHeader);
    const verifiedToken = jwt.verify(token, 'mysecrethash');

    return {
      jwt: verifiedToken,
    };
  }

  return {
    jwt: {},
  };
};

module.exports = {
  generateToken,
  generateUniqueId,
  authorizeToken,
};
