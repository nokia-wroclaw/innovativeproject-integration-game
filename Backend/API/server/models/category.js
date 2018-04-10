var Sequelize=require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        field: 'name'
    }
}, {
    timestamps: false
});
  return category;
};