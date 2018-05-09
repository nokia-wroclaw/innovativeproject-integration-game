'use strict';
module.exports = (sequelize, DataTypes) => {
  var preset = sequelize.define('Preset', {
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