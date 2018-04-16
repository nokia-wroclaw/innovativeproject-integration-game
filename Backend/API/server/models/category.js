module.exports = (sequelize, DataTypes) => {
  var category = sequelize.define('category', {
    name: DataTypes.STRING
  }, {});
  category.associate = models => {
    category.belongsToMany(models.people, {through: 'peopleCategory'});
  };
  return category;
};