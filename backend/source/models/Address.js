const { Model , DataTypes } = require("sequelize");

class Address extends Model {
    static init( sequelize ){
		super.init({
            cep        : DataTypes.STRING,
			bairro     : DataTypes.STRING,
			street     : DataTypes.STRING,
            reference_point : DataTypes.STRING,
            complement : DataTypes.STRING,
 		},{
            sequelize,
            tableName: "address",
            timestamps: false
		})
    }

	static associete( MODELS ){
        this.belongsTo( MODELS.States , {foreignKey:"state_id"} );
        this.belongsTo( MODELS.City , {foreignKey:"city_id"} );
        
        this.hasMany( MODELS.Seen , {foreignKey:"address_id"} );
        this.hasMany( MODELS.Found , {foreignKey:"address_id"} );
    }
}

module.exports = Address;