'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('users',{
      id        :  { type: Sequelize.INTEGER , autoIncrement: true , primaryKey:true },
      name      :  { type: Sequelize.STRING , allowNull: false },
      mail      :  { type: Sequelize.STRING , allowNull: false },
      telephone :  { type: Sequelize.STRING , allowNull: false },
      cpf       :  { type: Sequelize.STRING , allowNull: false },
      password  :  { type: Sequelize.STRING , allowNull: false },    
      photo     :  { type: Sequelize.STRING , allowNull: true },
      merit     :  { type: Sequelize.INTEGER , allowNull: true },
      indication:  { type: Sequelize.STRING , allowNull: true },
      created_at:  { type: Sequelize.DATE , allownull: false },
      updated_at:  { type: Sequelize.DATE , allownull: false },
      where_live_id   : { type: Sequelize.INTEGER , allowNull: false , 
        references: {
          model:"where_live",
          key:"id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE", }
    });
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
