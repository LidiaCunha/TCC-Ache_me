'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('losted_post', {
      id          : { type : Sequelize.INTEGER , primaryKey :true, autoIncrement : true },
      name        : { type : Sequelize.TEXT , allowNull: false },
      description : { type : Sequelize.TEXT , allowNull: false },
      borned_at   : { type : Sequelize.DATE , allowNull: false },
      photo       : { type : Sequelize.TEXT , allowNull: false },
      created_at:  { type: Sequelize.DATE , allownull: false },
      updated_at:  { type: Sequelize.DATE , allownull: false },
      id_user     : { type : Sequelize.INTEGER , allowNull: false , 
        references: {
          model:"users",
          key:"id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      genre_id  : { type: Sequelize.INTEGER , allowNull: false,
        references: {
          model:"genre",
          key  :"id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }
    });
       
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('losted_post'); 
  }
};
