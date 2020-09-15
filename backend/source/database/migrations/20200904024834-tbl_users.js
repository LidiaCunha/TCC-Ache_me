'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('users',{
      id        :  { type: Sequelize.INTEGER , autoIncrement: true , primaryKey:true },
      name      :  { type: Sequelize.STRING , allowNull: false },
      mail      :  { type: Sequelize.STRING , allowNull: false },
      telephone :  { type: Sequelize.STRING, allowNull: false },
      cpf       :  { type: Sequelize.STRING , allowNull: false },
      password  :  { type: Sequelize.STRING , allowNull: false },
      cep       :  { type: Sequelize.STRING , allowNull: false },
			bairro    :  { type: Sequelize.STRING , allowNull: false },
			street    :  { type: Sequelize.STRING , allowNull: false },
			number    :  { type: Sequelize.STRING , allowNull: false },
      photo     :  { type: Sequelize.STRING , allowNull: true },
      created_at:  { type: Sequelize.DATE , allownull: false },
      updated_at:  { type: Sequelize.DATE , allownull: false },
    });
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
