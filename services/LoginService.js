const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { sechemaLogin } = require('../middlewares/validations');

const verify = async (email, password) => {
  const response = sechemaLogin.validate({ email, password });
  if (response.error) { 
    const messageError = response.error.details[0].message;
    return { code: 400, message: messageError }; 
  }

  const verifyEmail = await User.findOne({ where: { email } });
  if (!verifyEmail) { 
    return { code: 400, message: 'Invalid fields' }; 
  }

  const secretJwt = process.env.JWT_SECRET;
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: email }, secretJwt, jwtConfig);

  return token;
};

module.exports = {
  verify,
};