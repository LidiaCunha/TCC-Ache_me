const { Model , DataTypes } = require("sequelize");

class Seen extends Model {
  static init( sequelize ){
		super.init({ seen_at : DataTypes.DATE  },{  sequelize, tableName: "seen"})
  }

	static associete( MODELS ){
    this.belongsTo( MODELS.Address , {foreignKey:"address_id"} );
    this.belongsTo( MODELS.LostedPost , {foreignKey:"losted_id"} );

    this.belongsToMany( MODELS.WhoSaw , {through:"who_saw"} );
    
  }
}

module.exports = Seen;