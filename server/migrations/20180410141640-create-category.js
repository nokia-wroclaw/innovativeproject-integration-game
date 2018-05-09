module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('categories', {
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
      presetId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'preset',
          key: 'id',
          as: 'presetId',
        }
      },
    });
  },
  down: (queryInterface, Sequelize) => {
  
    
    return queryInterface.dropTable('categories');
  }
};