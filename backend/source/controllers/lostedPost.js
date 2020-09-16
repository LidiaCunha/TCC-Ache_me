const LostedPost = require('../models/LostedPost');
const Genre = require('../models/Genre');
const FeatureOfPost = require('../models/FeatureOfPost');
const Features = require('../models/Features');

const { Op } = require('sequelize');
const moment = require('moment');

module.exports = {
    index  : async( req, res) => {
        const posts = await LostedPost.findAll();
        
        const AllPosts = [];

        const takeFeatures = async(post) =>{
            const featuresOfPost = await FeatureOfPost.findAll({where: {losted_id:post.dataValues.id}});
            
            let thisPost;

            let featuresCreateds = [];

            for (i=0;i<featuresOfPost.length;i++){

                const fet = await Features.findByPk(featuresOfPost[i].dataValues.feature_id)
            
                featuresCreateds[featuresCreateds.length]=fet.dataValues;
                
                if (featuresCreateds.length == featuresOfPost.length){
                    thisPost = {...post.dataValues, features: featuresCreateds };
                }               
            }
            
            return thisPost;
        };

        posts.forEach( async post => {
            const thisPost = await takeFeatures(post);
            thisPost ? AllPosts[AllPosts.length]=thisPost : AllPosts[AllPosts.length]=post; 
            
            if ( posts.length == AllPosts.length ){
                return res.status(200).send(AllPosts);
            }
        });

    },
    store  : async( req, res) => {
        const  id_user  = req.userId;

        const { name, description, borned_at, name_of_genre , feature } = req.body;

        const { firebaseUrl } = req.file ? req.file : "";

        if ( !(name && description && borned_at && firebaseUrl) ) {
            return res.status(401).send({"error":"you need to pass all arguments"})
        }
    
        const gengeAlreadyExists = await Genre.findOne({where:{genre:name_of_genre}});

        let genre_id = '';
        if ( gengeAlreadyExists ){
            genre_id = gengeAlreadyExists.dataValues.id;
        }else{
            const genreCreated = await Genre.create({genre:name_of_genre});
            genre_id = genreCreated.dataValues.id;
        }
            
        const LostedExists = await LostedPost.findOne({where: {[Op.and]: {name:name, borned_at:moment(borned_at,'ddd, D MMM YYYY H:mm:ss Z').format()}}})

        if ( LostedExists ){
            return res.status(400).send({"error":"i need to implement an artificial inteligence here to analise the pictures and se if there as the same people"})
        }

        const Post = await LostedPost.create({name,description,borned_at: moment(borned_at,'ddd, D MMM YYYY H:mm:ss Z').format(),photo:firebaseUrl,id_user, genre_id});
    
        if ( !Post ){
            return res.status(401).send({"error":"sequelize died"})
        }
        
        const featureExists = await Features.findOne({where:{feature}});
        if ( featureExists ){
            await FeatureOfPost.create({feature_id:featureExists.dataValues.id ,losted_id:Post.dataValues.id })
        }else{
            const featureCreated = await Features.create({feature});
            await FeatureOfPost.create({feature_id:featureCreated.dataValues.id ,losted_id:Post.dataValues.id })
        }
 
        const featuresOfPost = await FeatureOfPost.findAll({where: {losted_id:Post.dataValues.id}});
        
        let featuresCreateds = [];
        featuresOfPost.forEach( async feature => {
            const fet = await Features.findByPk(feature.dataValues.feature_id)
            featuresCreateds[featuresCreateds.length]=fet.dataValues;

            if (featuresCreateds.length == featuresOfPost.length){
                return res.status(201).send({...Post.dataValues, features: featuresCreateds });
            }
        });
    },
    update : async( req, res) => {
        const { idPost } = req.params;
        
        const  id_user  = req.userId;

        const { name, description, borned_at } = req.body;

        const { firebaseUrl } = req.file ? req.file : "";

        const postExists = await LostedPost.findByPk(idPost);

        if ( !postExists && postExists.dataValues.id_user != id_user ) {
            return res.status(403).send({"error":"post doesn't exists or don't pertences to user"});
        }

        const gengeAlreadyExists = await Genre.findOne({genre:name_of_genre});

        let genre_id = '';
        if ( gengeAlreadyExists ){
            genre_id = gengeAlreadyExists.dataValues.id;
        }else{
            const genreCreated = await Genre.create({genre:name_of_genre});
            genre_id = genreCreated.dataValues.id;
        }
    
        const wasUpdated = LostedPost.update({name,description,borned_at: moment(borned_at,'ddd, D MMM YYYY H:mm:ss Z').format(),photo:firebaseUrl, genre_id}, { where: { id : idPost } } );        
    
        if ( !wasUpdated ) {
            return res.status(402).send({"sucess":false});
        }

        return res.status(201).send({"sucess":true});
    },
    delete : async( req, res) => {
        const { idPost } = req.params;
        
        const  id_user  = req.userId;

        const postExists = await LostedPost.findByPk(idPost);

        if ( !postExists && postExists.dataValues.id_user != id_user ) {
            return res.status(403).send({"error":"post doesn't exists or don't pertences to user"});
        }

        const wasDeleted = await LostedPost.destroy({where: {id:idPost}});

        if ( !wasDeleted ){
            return res.status(401).send({"error":false});
        }

        return res.status(201).send({"sucess":true});
    },
};