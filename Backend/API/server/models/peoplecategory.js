var Sequelize=require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const peopleCategory = sequelize.define('peopleCategory', {
    idPeople: {
        type: Sequelize.INTEGER,
        field: 'idPeople',
        primaryKey: true
    },
    idCategory: {
        type: Sequelize.INTEGER,
        field: 'idCategory',
        primaryKey: true
    }
}, {
    timestamps: false
});
  peopleCategory.associate = function(models) {
    peopleCategory.belongsTo(models.people, {
      foreignKey: 'idPeople',
      targetKey: 'id'
  });
  peopleCategory.belongsTo(models.category, {
      foreignKey: 'idCategory',
      targetKey: 'id'
  });
  };
  return peopleCategory;
};