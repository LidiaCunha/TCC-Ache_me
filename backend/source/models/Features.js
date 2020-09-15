const { Model , DataTypes } = require("sequelize");

class Features extends Model {
    static init( sequelize ){
        super.init({ feature  :  DataTypes.STRING  },{ sequelize, tableName:"features" })
    }
    static associete( MODELS ){
        this.belongsToMany(MODELS.LostedPost, { through: 'feature_from_losted' });
    }
}

module.exports = Features;