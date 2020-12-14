const { Model , DataTypes } = require("sequelize");

class HealthProblems extends Model {
    static init( sequelize ){
        super.init({ 
            problem     :  DataTypes.STRING,
        },{ 
            sequelize,
            tableName:"health_problems",
            timestamps: false 
        })
    }
    static associete( MODELS ){
        this.belongsToMany( MODELS.LostedPost, {through: "HealthProblemsOfPost"})
    }
}

module.exports = HealthProblems;