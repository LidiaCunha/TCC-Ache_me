'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('health_problems', {
      id: {type:Sequelize.INTEGER, autoIncrement : true , primaryKey:true},
      problem : {type:Sequelize.STRING , allowNull: false},
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('health_problems'); 
  }
};
