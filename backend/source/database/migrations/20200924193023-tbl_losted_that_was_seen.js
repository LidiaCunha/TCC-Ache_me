'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('losted_that_was_seen', { 
      id : { type:Sequelize.INTEGER, autoIncrement : true , primaryKey:true},
      losted_id :  { type: Sequelize.INTEGER,allowNull: false,
        references :{
          model:"losted_post",
          key:"id"
        },
        OnUpdate: "CASCADE",
        OnDelete: "CASCADE",
      },
      seen_id : { type: Sequelize.INTEGER,allowNull: false,
        references :{
          model:"seen",
          key:"id"
        },
        OnUpdate: "CASCADE",
        OnDelete: "CASCADE"
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('losted_that_was_seen');
  }
};
