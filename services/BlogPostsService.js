const { BlogPosts } = require('../models');
const auth = require('../middlewares/auth');
const { schemaPost } = require('../middlewares/validations');

const create = async ({ body, headers }) => {
  const authorized = auth.authentication(headers.authorization);
  if (authorized.code) { return authorized; }

  const response = schemaPost.validate(body);
  if (response.error) { return { code: 400, message: response.error.details[0].message }; }

    // const findCategorie = body.categoryIds.forEach((id) => {
    //   const categorie = Categories.findOne({ where: { id } });
    //   return categorie;
    // });
    // console.log(findCategorie);

  BlogPosts.create({ 
    title: body.title, 
    content: body.content,
    published: Date.now(),
    updated: Date.now(), 
    userId: 2,
  });

  return body;
};

module.exports = {
  create,
};