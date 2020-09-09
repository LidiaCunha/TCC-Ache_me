const { Model , DataTypes } = require("sequelize");

class WhereLive extends Model {
    // constructor da classe user
    static init( sequelize ){
		super.init({
            cep        : DataTypes.STRING,
			bairro     : DataTypes.STRING,
			street     : DataTypes.STRING,
            number     : DataTypes.STRING,
            complement : DataTypes.STRING,
 		},{
            sequelize,
            tableName: "where_live"
		})
    }

	static associete( MODELS ){
        // has a lot of states and citys but just extends one user
        this.belongsTo( MODELS.States , {foreignKey:"state_id"} );
        this.belongsTo( MODELS.City , {foreignKey:"city_id"} );
        this.hasMany( MODELS.Users , {foreignKey:"where_live_id"} );
    }
}
module.exports = WhereLive;