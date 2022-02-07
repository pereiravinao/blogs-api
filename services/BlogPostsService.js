const { BlogPosts, Categories } = require('../models');
const auth = require('../middlewares/auth');
const { schemaPost } = require('../middlewares/validations');

const create = async ({ body, headers }) => {
  const authorized = auth.authentication(headers.authorization);
  if (authorized.code) { return authorized; }

  const allCategories = await Categories.findAll();
  const newCategories = await allCategories.map(({ id }) => id);

  const response = schemaPost.validate(body);
  if (response.error) { return { code: 400, message: response.error.details[0].message }; }

  const isValidCat = body.categoryIds.filter((e) => newCategories.includes(e));
  if (isValidCat.length < 1) { return { code: 400, message: '"categoryIds" not found' }; }

  const newPost = await BlogPosts.create({ 
    title: body.title, 
    content: body.content,
    published: Date.now(),
    updated: Date.now(), 
    userId: 1,
  });

  return newPost;
};

module.exports = {
  create,
};