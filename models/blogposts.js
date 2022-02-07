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
  return BlogPosts;
};