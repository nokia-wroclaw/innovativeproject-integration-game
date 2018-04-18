module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('people', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nickname: {
        type: Sequelize.STRING
        
      },
      //WAZNE tu zwrocic uwage, czy nie trzeba dac jako model category/categories/Category/Categories
      categoryId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'category',
          key: 'id',
          as: 'categoryId',
        }
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('people');
  }
};