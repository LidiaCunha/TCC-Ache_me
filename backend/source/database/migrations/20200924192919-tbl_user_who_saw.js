'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('who_saw', { 
      id: {type:Sequelize.INTEGER, autoIncrement : true , primaryKey:true},
      confirm : {type:Sequelize.BOOLEAN, allowNull: false},
      created_at:  { type: Sequelize.DATE , allownull: false },
      updated_at: { type: Sequelize.DATE , allownull:false},
      id_user_who_saw: {type:Sequelize.INTEGER, allowNull: false,
        references:{
          model:"users",
          key:"id"
        },
        OnDelete: "CASCADE",
        OnUpdate: "CASCADE",
      },
      id_losted_seen : {type:Sequelize.INTEGER, allowNull: false,
        references:{
          model:"seen",
          key:"id",
        },
        OnDelete: "CASCADE",
        OnUpdate: "CASCADE"
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('who_saw');
  }
};
