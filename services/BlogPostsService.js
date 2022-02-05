const { BlogPosts } = require('../models');
const auth = require('../middlewares/auth');

const create = async ({ body, headers }) => {
  const authorized = auth.authentication(headers.authorization);
  if (authorized.code) { return authorized; }

  BlogPosts.create(body);

  return body;
};

module.exports = {
  create,
};