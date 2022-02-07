module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', { 
    title: DataTypes.TEXT,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
  });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.Users, { foreignKey: 'id', as: 'user' });
    BlogPosts.belongsTo(models.Categories, { foreignKey: 'id', as: 'categories' });
};

  BlogPosts.findAllClean = () => 
    BlogPosts.findAll().then((post) => post.map((e) => e.dataValues));

  return BlogPosts;
};