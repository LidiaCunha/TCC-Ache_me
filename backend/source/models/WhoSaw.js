const { Model , DataTypes } = require("sequelize");

class WhoSaw extends Model {
    static init( sequelize ){
		super.init({ confirm : DataTypes.BOOLEAN  },{  sequelize, tableName: "who_saw"})
    }

	static associete( MODELS ){
        this.belongsTo( MODELS.Users , {foreignKey:"id_user_who_saw"} );
        this.belongsTo( MODELS.Seen , {foreignKey:"id_losted_seen"} );
    }
}

module.exports = WhoSaw;