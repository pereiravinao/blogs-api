const { Categories } = require('../models');
const auth = require('../middlewares/auth');

const create = async ({ body, headers }) => {
  const authorized = auth.authentication(headers.authorization);
  if (authorized.code) { return authorized; }

  if (!body.name) { return { code: 400, message: '"name" is required' }; }

  Categories.create(body.name);

  return body;
};

module.exports = {
  create,
};