const FeatureOfPost = require('../models/FeatureOfPost');
const Features = require('../models/Features');

module.exports = {
    strore: async( req , res ) => {
        const { feature } = req.body;
        const { PostId } = req.params;

        const featureExists = await Features.findOne({where:{feature}});
        
        if ( featureExists ){
            const fetOfPost = await FeatureOfPost.create({feature_id:featureExists.dataValues.id ,losted_id:PostId })
            return res.status(201).send(fetOfPost);
        }else{
            const featureCreated = await Features.create({feature});
            const fetOfPost = await FeatureOfPost.create({feature_id:featureCreated.dataValues.id ,losted_id:PostId })
            return res.status(201).send(fetOfPost)
        }
    },
    index: async( req , res ) => {
        const {PostId} = req.params;
        const featuresOfPost = await FeatureOfPost.findAll({where: {losted_id:PostId}});
        console.log(featuresOfPost)
        let featuresCreateds = [];
        featuresOfPost.forEach( async feature => {
            const fet = await Features.findByPk(feature.dataValues.feature_id)
            featuresCreateds[featuresCreateds.length]=fet.dataValues;

            if (featuresCreateds.length == featuresOfPost.length){
                return res.status(201).send( featuresCreateds );
            }
        });
    }
}