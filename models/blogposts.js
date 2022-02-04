module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', { 
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.NUMBER,
  });
  return BlogPosts;
};