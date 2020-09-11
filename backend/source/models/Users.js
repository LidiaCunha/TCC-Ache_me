const { Model , DataTypes } = require("sequelize");

class Users extends Model {
    // constructor da classe user
    static init( sequelize ){
		super.init({
			name       : DataTypes.STRING,
			mail       : DataTypes.STRING,
			cpf        : DataTypes.STRING,
			telephone  : DataTypes.STRING,
			password   : DataTypes.STRING,
			photo	   : DataTypes.STRING,
			merit      : DataTypes.INTEGER,
			indication : DataTypes.STRING,
 		},{
			sequelize,
		})
    }

    /* RELACIONAMENTOS SÂO DECLARADOS AQUI */
	static associete( MODELS ){
		this.belongsTo( MODELS.WhereLive , {foreignKey:"where_live_id"} );
    }
}
module.exports = Users; 