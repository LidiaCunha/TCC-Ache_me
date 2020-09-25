const { Model , DataTypes } = require("sequelize");

class Genre extends Model {
    static init( sequelize ){
        super.init({ genre  :  DataTypes.STRING  },{ sequelize, tableName:"genre",timestamps: false })
    }
    static associete( MODELS ){
        this.hasMany( MODELS.LostedPost, {foreignKey:"genre_id"})
    }
}

module.exports = Genre;