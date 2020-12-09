const { Model , DataTypes } = require("sequelize");

class Comment extends Model {
    static init( sequelize ){
        super.init({ comment  :  DataTypes.STRING  },{ sequelize, tableName:"comment" })
    }
    static associete( MODELS ){
        this.belongsTo( MODELS.Users, {foreignKey:"id_user"})
        this.belongsTo( MODELS.LostedPost, {foreignKey:"id_losted"});
    }
}

module.exports = Comment;