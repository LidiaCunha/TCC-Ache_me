'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('where_live', {
      id        :  { type: Sequelize.INTEGER , autoIncrement: true , primaryKey:true },
      cep       :  { type: Sequelize.STRING , allowNull: false },
			bairro    :  { type: Sequelize.STRING , allowNull: false },
			street    :  { type: Sequelize.STRING , allowNull: false },
      number    :  { type: Sequelize.STRING , allowNull: false },
      complement:  { type: Sequelize.STRING , allowNull: false },
      created_at:  { type: Sequelize.DATE , allownull: false },
      updated_at:  { type: Sequelize.DATE , allownull: false },
      // FOREIGN KEYS
      state_id  :  { type: Sequelize.INTEGER, allowNull: false , 
        references: {
          model:"states",
          key:"id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE", },
      city_id  :  { type: Sequelize.INTEGER, allowNull: false , 
        references: {
          model:"city",
          key:"id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE", },
      
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('where_live') 
  }
};
