module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', { 
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  Categories.associate = (models) => {
    Categories.belongsTo(models.BlogPosts, { foreignKey: 'id', as: 'categories' });
};

  Categories.findAllClean = () => 
    Categories.findAll().then((category) => 
      category.map((e) => e.dataValues));

  return Categories;
};