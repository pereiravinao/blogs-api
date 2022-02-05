const jwt = require('jsonwebtoken');

const secretJwt = process.env.JWT_SECRET;

const create = (email) => {
  const jwtConfig = {
    expiresIn: '2h',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ email }, secretJwt, jwtConfig);
  return token;
};

const verify = (token) => {
  try {
    const decode = jwt.verify(token, secretJwt);
    return decode;
  } catch (err) {
    const error = new Error();
    error.message = 'Expired or invalid token';
    error.code = '401';
    return error;
  }
};

module.exports = {
  create,
  verify,
};