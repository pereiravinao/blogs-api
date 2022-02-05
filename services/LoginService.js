const { User } = require('../models');
const { sechemaLogin } = require('../middlewares/validations');

const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  .eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJl
  bWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4
  cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8`;

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
  return TOKEN;
};

module.exports = {
  verify,
};