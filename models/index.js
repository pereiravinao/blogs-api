const { Sequelize, DataTypes } = require('sequelize');

const { development } = require('../config/config');

const sequelize = new Sequelize(development);

const userModelBuilder = require('./user');
const categoriesModelBuilder = require('./categories');

const User = userModelBuilder(sequelize, DataTypes);
const Categories = categoriesModelBuilder(sequelize, DataTypes);

// ver o nome dos models no sequelize.models
console.log(sequelize.models);

// Object.values(sequelize.models).forEach((model) => {
//   model.associate(sequelize.models);
// });

module.exports = {
   User, 
   Categories,
};