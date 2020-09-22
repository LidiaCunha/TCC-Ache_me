'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comment', { 
      id         : { type: Sequelize.INTEGER , autoIncrement : true , primaryKey:true},
      comment    : { type: Sequelize.TEXT , allowNull: false},
      created_at:  { type: Sequelize.DATE , allownull: false },
      updated_at:  { type: Sequelize.DATE , allownull: false },
      id_user    : { type: Sequelize.INTEGER , allowNull: false,
        references: {
          model : "users",
          key   : "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      id_losted  : { type: Sequelize.INTEGER , allowNull: false, 
        references: {
          model : "losted_post",
          key   : "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('comment');
    
  }
};
