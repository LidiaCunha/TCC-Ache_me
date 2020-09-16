'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('features_of_post', { 
      id: {type:Sequelize.INTEGER, autoIncrement : true , primaryKey:true},
      feature_id : {type:Sequelize.INTEGER, allowNull: false,
        references:{
          model:"features",
          key:"id"
        },
        onUpdate: "CASCADE",
        OnDelete: "CASCADE",
      },
      losted_id : {type:Sequelize.INTEGER,allowNull:false,
        references:{
          model:"losted_post",
          key:"id"
        },
        OnUpdate: "CASCADE",
        OnDelete: "CASCADE",
      }
    }); 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('features_of_post');
  }
};
