module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', { 
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  Categories.findAllClean = () => 
  Categories.findAll().then((category) => 
  category.map((e) => e.dataValues));

  return Categories;
};