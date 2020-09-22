const { Model , DataTypes } = require("sequelize");

class HealthProblemsOfPost extends Model {
    static init( sequelize ){
        super.init({  },{  sequelize, tableName:"health_problems_of_post", timestamps: false})
    }
    static associete( MODELS ){
        this.belongsTo( MODELS.LostedPost, {foreignKey:"LostedPostId"});
        this.belongsTo( MODELS.HealthProblems, {foreignKey:"HealthProblemId"});
    }
}

module.exports = HealthProblemsOfPost;