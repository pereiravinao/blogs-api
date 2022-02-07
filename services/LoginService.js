const { Users } = require('../models');
const { sechemaLogin } = require('../middlewares/validations');
const auth = require('../middlewares/auth');

const verify = async (email, password) => {
  const response = sechemaLogin.validate({ email, password });
  if (response.error) { 
    const messageError = response.error.details[0].message;
    return { code: 400, message: messageError }; 
  }
  const verifyEmail = await Users.findOne({ where: { email } });
  if (!verifyEmail) { return { code: 400, message: 'Invalid fields' }; }
  
  const token = auth.create(email);
  return token;
};

module.exports = {
  verify,
};