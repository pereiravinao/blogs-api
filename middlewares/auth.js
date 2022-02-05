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

const authentication = (token) => {
  if (!token) { return { code: 401, message: 'Token not found' }; }

  const response = verify(token);
  if (response.code === '401') { return { code: 401, message: 'Expired or invalid token' }; }

  return true;
};

module.exports = {
  create,
  verify,
  authentication,
};