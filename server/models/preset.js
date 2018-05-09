'use strict';
module.exports = (sequelize, DataTypes) => {
  var preset = sequelize.define('preset', {
    name: DataTypes.STRING,
    isDefault: DataTypes.BOOLEAN
  }, {});
  preset.associate =  models => {
    preset.hasMany(models.people, {
      foreignKey: 'presetId',
      as: 'categories'
    })
    
  };
  return preset;
};