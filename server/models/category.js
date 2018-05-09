module.exports = (sequelize, DataTypes) => {
  var category = sequelize.define('category', {
    name: DataTypes.STRING
  }, {});
  category.associate = models => {
    preset.hasMany(models.people, {
      foreignKey: 'categoryId',
      as: 'people'
    }),
    category.belongsTo(models.preset, 
      {
        foreignKey: 'presetId',
        onDelete: 'CASCADE'
    })
    
  };
  return category;
};