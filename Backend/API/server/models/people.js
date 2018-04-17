'use strict';
module.exports = (sequelize, DataTypes) => {
  var people = sequelize.define('people', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    nickname: DataTypes.STRING
  }, {});
  people.associate = models => {
    people.belongsTo(models.category, 
      {
        foreignKey: 'categoryId',
        onDelete: 'CASCADE'
    });
  };
  return people;
};