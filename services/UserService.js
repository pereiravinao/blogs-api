const { User } = require('../models');
const schema = require('../middlewares/validations');

const create = async (object) => {
    const value = await schema.validate(object);
    if (value.error) { 
      const messageError = value.error.details[0].message;
      return { code: 400, message: messageError }; 
    }
    const verifyEmail = await User.findOne({ where: { email: object.email } });
    if (verifyEmail) { return { code: 409, message: 'User already registered' }; }
    const userCreated = await User.create(object);
    return userCreated.dataValues;
};

const find = async () => {
  const users = await User.findAll();
  const newUsers = users.map((Users) => Users.dataValues);
  return newUsers;
};

module.exports = { 
  create,
  find,
};