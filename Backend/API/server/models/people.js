var Sequelize=require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const people = sequelize.define('people', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
    surname: {
        type: Sequelize.STRING,
        field: 'surname'
    },
    nickname: {
        type: Sequelize.STRING,
        field: 'nickname'
    }
}, {
    timestamps: false
});
  return people;
};