const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize('sqlite::memory:');

class Messages extends Model {
	static init(sequelize){
		super.init({
			sendBy    : DataTypes.INTEGER,
			recibedBy : DataTypes.INTEGER,
			message   : DataTypes.STRING,
		}, {
			sequelize, 
			modelName: 'messages'
		});
	}	
}

module.exports = Messages;
