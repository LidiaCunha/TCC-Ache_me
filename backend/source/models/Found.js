const { Model , DataTypes } = require("sequelize");

class Found extends Model {
    static init( sequelize ){
		super.init({ 
            found_at : DataTypes.DATE,
            photo : DataTypes.STRING,  
        },{
            sequelize, 
            tableName: "found"})
    }

	static associete( MODELS ){
        this.belongsTo( MODELS.LostedPost , {foreignKey:"losted_id"} );
        this.belongsTo( MODELS.Address , {foreignKey:"address_id"} );
    }
}

module.exports = Found;