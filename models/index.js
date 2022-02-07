const { Sequelize, DataTypes } = require('sequelize');

const { development } = require('../config/config');

const sequelize = new Sequelize(development);

const userModelBuilder = require('./user');
const categoriesModelBuilder = require('./categories');
const BlogPostsModelBuilder = require('./blogposts');

const Users = userModelBuilder(sequelize, DataTypes);
const Categories = categoriesModelBuilder(sequelize, DataTypes);
const BlogPosts = BlogPostsModelBuilder(sequelize, DataTypes);

Object.keys(sequelize.models).forEach(modelName => {
  if (sequelize.models[modelName].associate) {
    sequelize.models[modelName].associate(sequelize.models);
  }
});

module.exports = {
   Users, 
   Categories,
   BlogPosts,
};