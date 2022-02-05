const jwt = require('jsonwebtoken');

const secretJwt = process.env.JWT_SECRET;
// const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxld2lzaGFtaWx0b25AZ21haWwuY29tIiwiaWF0IjoxNjQ0MDg1OTg5LCJleHAiOjE2NDQwODU5OTF9.pt828I1atcvINTkxN3ynhEqWdy7aWuNktzUpDjpP03E';
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