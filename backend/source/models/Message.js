const { Model , DataTypes } = require("sequelize");

class Message extends Model {
    static init( sequelize ){
        super.init({
            message  :  DataTypes.STRING,
            photo: DataTypes.STRING
        },{ sequelize, tableName:"messages" })
    }
    static associete( MODELS ){
        this.belongsTo( MODELS.Users, {foreignKey: "sender" });
        this.belongsTo( MODELS.Users, {foreignKey: "recipient" });
    }
}

module.exports = Message;