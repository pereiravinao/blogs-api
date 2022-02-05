const Joi = require('joi');

const schema = Joi.object({
  displayName: Joi.string()
        .min(8)
        .required(),

    password: Joi.string()
        .required({ message: '"password" is required' })
        .$.min(6).max(6).rule({ message: '"password" length must be 6 characters long' }),

    email: Joi.string()
    .email()
    .required(),

  image: Joi.string().allow(),
});

const sechemaLogin = Joi.object({
  email: Joi.string()
  .email()
  .$.min(1).rule({ message: '"email" is not allowed to be empty' })
  .required({ message: '"email" is required' }),

  password: Joi.string()
      .required({ message: '"password" is required' })
      .$.min(1).rule({ message: '"password" is not allowed to be empty' }),
});

module.exports = { schema, sechemaLogin };