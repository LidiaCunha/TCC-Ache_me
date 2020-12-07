'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('genre', { 
        id: {type:Sequelize.INTEGER, autoIncrement : true , primaryKey:true},
        genre: {type:Sequelize.STRING , allowNull: false},
        created_at:  { type: Sequelize.DATE , allownull: false },
        updated_at:  { type: Sequelize.DATE , allownull: false },
      }); 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('genre'); 
  }
};
