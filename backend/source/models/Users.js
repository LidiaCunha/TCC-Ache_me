const { Model , DataTypes } = require("sequelize");

class Users extends Model {
    // constructor da classe user
    static init( sequelize ){
		super.init({
			name     : DataTypes.STRING,
			mail     : DataTypes.STRING,
			cpf      : DataTypes.STRING,
			telephone: DataTypes.STRING,
			password : DataTypes.STRING,
			cep      : DataTypes.STRING,
			bairro   : DataTypes.STRING,
			street   : DataTypes.STRING,
			number   : DataTypes.STRING,
			photo	 : DataTypes.STRING,
 		},{
			sequelize,
		})
    }

    /* RELACIONAMENTOS SÂO DECLARADOS AQUI */
	// static associete( MODELS ){
    
    // }
}
module.exports = Users; 