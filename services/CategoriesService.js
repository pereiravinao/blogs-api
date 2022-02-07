const { Categories } = require('../models');
const auth = require('../middlewares/auth');

const create = async ({ body, headers }) => {
  const authorized = auth.authentication(headers.authorization);
  if (authorized.code) { return authorized; }

  if (!body.name) { return { code: 400, message: '"name" is required' }; }

  Categories.create(body.name);

  return body;
};

const findAll = async ({ headers }) => {
  const authorized = auth.authentication(headers.authorization);
  if (authorized.code) { return authorized; }

  const categories = await Categories.findAllClean();

  return categories;
};

module.exports = {
  create,
  findAll,
};