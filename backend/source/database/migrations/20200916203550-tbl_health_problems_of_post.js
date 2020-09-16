'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('health_problems_of_post', { 
      id: {type:Sequelize.INTEGER , autoIncrement : true , primaryKey:true},
      id_health_problem:  { type: Sequelize.INTEGER, allowNull: false, 
        references:{
          model:"health_problems",
          key:"id"
        },
        OnUpdate:"CASCADE",
        OnDelete:"CASCADE",
      },
      id_losted : { type: Sequelize.INTEGER, allowNull: false, 
        references:{ 
          model:"losted_post",
          key:"id"
        },
        OnUpdate:"CASCADE",
        OnDelete:"CASCADE",
      }
     });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('health_problems_of_post');
  }
};
