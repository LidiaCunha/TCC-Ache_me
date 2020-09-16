const { Model , DataTypes } = require("sequelize");

class LostedPost extends Model {
    static init( sequelize ){
        super.init({ 
            name          :  DataTypes.STRING, 
            description   :  DataTypes.STRING,
            borned_at     :  DataTypes.DATE,
            photo         :  DataTypes.STRING
        },{ 
            sequelize, 
            tableName:"losted_post" 
        })
    }
    static associete( MODELS ){
        this.belongsTo( MODELS.Users, {foreignKey:"id_user"});
        this.hasMany( MODELS.Comment, {foreignKey:"id_losted"});
        this.belongsTo( MODELS.Genre, {foreignKey:"genre_id"});

        this.belongsToMany( MODELS.Features, {through: "FeaturesOfPost"});
        this.belongsToMany( MODELS.HealthProblems, {through: "HealthProblemsOfPost"})
    }
}

module.exports = LostedPost;