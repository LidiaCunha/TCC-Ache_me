const { Model , DataTypes } = require("sequelize");

class LostedSeen extends Model {
    static init( sequelize ){
		super.init({  },{  sequelize , tableName: "losted_that_was_seen" , timestamps: false })
    }

	static associete( MODELS ){
        this.belongsTo( MODELS.Users , {foreignKey:"id_user_who_saw"} );
        this.belongsTo( MODELS.Seen , {foreignKey:"id_losted_seen"} );
    }
}

module.exports = LostedSeen;