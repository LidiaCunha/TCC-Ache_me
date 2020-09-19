'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('health_problems_of_post', { 
      id: {type:Sequelize.INTEGER , autoIncrement : true , primaryKey:true},
      health_problem_id:  { type: Sequelize.INTEGER, allowNull: false, 
        references:{
          model:"health_problems",
          key:"id"
        },
        OnUpdate:"CASCADE",
        OnDelete:"CASCADE",
      },
      losted_post_id : { type: Sequelize.INTEGER, allowNull: false, 
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
