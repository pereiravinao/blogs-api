module.exports = (sequelize, DataTypes) => {
 const Users = sequelize.define('Users', {
  displayName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  image: DataTypes.STRING,
},
{
  timestamps: false,
});

  Users.findAllClean = () => Users
    .findAll({ attributes: { exclude: ['password'] } })
    .then((user) => user.map((e) => e.dataValues));
 
  return Users; 
};
