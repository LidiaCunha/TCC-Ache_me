const { Model , DataTypes } = require("sequelize");

class Users extends Model {
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

    static associete( MODELS ){
		this.belongsTo( MODELS.WhereLive , {foreignKey:"where_live_id"} );
		this.hasMany( MODELS.LostedPost , {foreignKey:"id_user"});
		this.hasMany( MODELS.Message, {foreignKey: "sender" });
        this.hasMany( MODELS.Message, {foreignKey: "recipient" });

		this.belongsToMany( MODELS.WhoSaw , {through:"who_saw"} );
    }
}
module.exports = Users; 