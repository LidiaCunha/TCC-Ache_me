const { Model , DataTypes } = require("sequelize");

class States extends Model {
    // constructor da classe user
    static init( sequelize ){
		super.init({
            name_of_state  :  DataTypes.STRING,
 		},{
			sequelize,
		})
    }
	static associete( MODELS ){
        this.hasMany(MODELS.WhereLive,{foreignKey:"state_id"})
    }
}
module.exports = States; 