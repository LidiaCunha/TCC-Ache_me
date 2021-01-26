const { Model } = require("sequelize");

class FeatureOfPost extends Model {
    static init( sequelize ){
        super.init({},{ sequelize,tableName:'features_of_post', timestamps:false })
    }
    static associete( MODELS ){
        this.belongsTo( MODELS.Features , {foreignKey: 'feature_id'})
        this.belongsTo( MODELS.LostedPost, {foreignKey: 'losted_id'});
    }
}

module.exports = FeatureOfPost;