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

module.exports = schema;