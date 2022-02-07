const { Users } = require('../models');
const { schema } = require('../middlewares/validations');
const auth = require('../middlewares/auth');

const create = async (object) => {
    const value = await schema.validate(object);
    if (value.error) { 
      const messageError = value.error.details[0].message;
      return { code: 400, message: messageError }; 
    }
    const verifyEmail = await Users.findOne({ where: { email: object.email } });
    if (verifyEmail) { return { code: 409, message: 'User already registered' }; }
    const userCreated = await Users.create(object);
    return userCreated.dataValues;
};

const find = async (token) => {
  const authorized = auth.authentication(token);
  if (authorized.code) { return authorized; }

  const users = await Users.findAll({
    attributes: { exclude: ['password'] } });
  const newUsers = users.map((User) => User.dataValues);
  return newUsers;
};

const findById = async (id, token) => {
  const authorized = auth.authentication(token);
  if (authorized.code) { return authorized; }
  
  const user = await Users.findByPk(id);
  if (!user) { return { code: 404, message: 'User does not exist' }; }
  return user;
};

module.exports = { 
  create,
  find,
  findById,
};