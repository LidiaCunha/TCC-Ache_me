'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('messages', { 
      id: {type : Sequelize.INTEGER,  autoIncrement : true , primaryKey : true}, 
      sender    : { type: Sequelize.INTEGER , allowNull: false ,
        references: {
          model:"users",
          key:"id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE", 
      },
      recipient : { type: Sequelize.INTEGER , allowNull: false ,
        references: {
          model:"users",
          key:"id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE", 
      },
      message   : { type: Sequelize.STRING , allowNull: true },
      photo      : { type: Sequelize.STRING , allowNull: true },
      created_at: { type: Sequelize.DATE , allownull: false },
      updated_at: { type: Sequelize.DATE , allownull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('messages');
  }
};
