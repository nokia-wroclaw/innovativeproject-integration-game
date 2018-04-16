module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'peopleCategory',
      {
        peopleId:
        {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        categoryId:
        {
          type: Sequelize.INTEGER,
          primaryKey: true
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('peopleCategory');
  }
};
