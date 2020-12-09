const { Model , DataTypes } = require("sequelize");

class City extends Model {
    static init( sequelize ){
        super.init({ name_of_city  :  DataTypes.STRING },{ sequelize, tableName:"city" })
    }
    static associete( MODELS ){
        this.hasMany( MODELS.WhereLive,{foreignKey:"city_id"})
    }
}

module.exports = City;