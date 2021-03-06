'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('found', { 
      id: {type:Sequelize.INTEGER, autoIncrement : true , primaryKey:true},
      found_at: {type:Sequelize.DATE, allowNull: false},
      photo : {type:Sequelize.STRING, allowNull: false},
      created_at:  { type: Sequelize.DATE , allownull: false },
      updated_at: { type: Sequelize.DATE , allownull:false},
      address_id :  { type: Sequelize.INTEGER, allowNull: false,
        references: {
          model:"address",
          key:"id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      losted_id :  { type: Sequelize.INTEGER,allowNull: false,
        references :{
          model:"losted_post",
          key:"id"
        },
        OnUpdate: "CASCADE",
        OnDelete: "CASCADE",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('found');
  }
};
