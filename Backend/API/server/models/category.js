module.exports = (sequelize, DataTypes) => {
  var category = sequelize.define('category', {
    name: DataTypes.STRING
  }, {});
  category.associate = models => {
    category.hasMany(models.people, {
      foreignKey: 'categoryId',
      as: 'people'
    });
  };
  return category;
};