'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('peopleCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      peopleId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:
        {
          model: 'people',
          key: 'id',
          as: 'peopleId'
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:
        {
          model: 'category',
          key: 'id',
          as: 'categoryId'
        }},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('peopleCategories');
  }
};