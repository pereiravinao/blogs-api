module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', { 
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  });

  return Categories;
};