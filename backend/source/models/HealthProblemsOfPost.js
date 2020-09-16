const { Model , DataTypes } = require("sequelize");

class HealthProblemsOfPost extends Model {
    static init( sequelize ){
        super.init({  },{  sequelize, tableName:"health_problems_of_post" })
    }
    static associete( MODELS ){
        this.belongsTo( MODELS.LostedPost, {foreignKey:"id_losted"});
        this.belongsTo( MODELS.HealthProblems, {foreignKey:"id_health_problem"});
    }
}

module.exports = HealthProblemsOfPost;