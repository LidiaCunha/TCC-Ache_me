const LostedPost = require('../models/LostedPost');
const Genre = require('../models/Genre');
const FeatureOfPost = require('../models/FeatureOfPost');
const Features = require('../models/Features');
const HealthProblems  = require('../models/HealthProblems');
const HealthProblemsOfPost = require('../models/HealthProblemsOfPost');

const { Op } = require('sequelize');
const moment = require('moment');

module.exports = {
    index  : async( req, res) => {
        const posts = await LostedPost.findAll();
        
        const AllPosts = [];

        const takeFeatures = async( post ) => {
            const featuresOfPost = await FeatureOfPost.findAll({where: {losted_id:post.id}});
            
            let thisPost;

            let featuresCreateds = [];

            for ( feature of featuresOfPost ){
                const fet = await Features.findByPk(feature.dataValues.feature_id)
            
                featuresCreateds[featuresCreateds.length]=fet.dataValues;
            
                if (featuresCreateds.length == featuresOfPost.length){
                    thisPost = {...post, features: featuresCreateds };
                }
            }
            return thisPost;
        };

        const takeHealthProblems = async( post ) => {
            const healthProblemsOfPost = await HealthProblemsOfPost.findAll({where:{LostedPostId: post.id}});
            let HealthProblemsArr =[];
            let thisPost;
            for ( problem of healthProblemsOfPost ){
               
                const thisProblem = await HealthProblems.findByPk(problem.dataValues.HealthProblemId);

                HealthProblemsArr[HealthProblemsArr.length]=thisProblem.dataValues;

                if( healthProblemsOfPost.length == HealthProblemsArr.length ){
                    thisPost = {...post, HealthProblem: HealthProblemsArr};
                }
            }
            return thisPost;
        };

        posts.forEach( async post => {
            const postWithFeatures = await takeFeatures(post.dataValues);
            const postWithProblems = await takeHealthProblems(postWithFeatures ? postWithFeatures : post.dataValues);
            
            postWithProblems ?
                AllPosts [ AllPosts.length ] = postWithProblems : 
                    AllPosts [ AllPosts.length ] = ( postWithFeatures ? postWithFeatures : post.dataValues ); 
            
            if ( posts.length == AllPosts.length ){
                return res.status(200).send(AllPosts);
            }
        });

    },
    show   : async( req, res) => {
        const { PostId } = req.params;

        const post = await LostedPost.findByPk(PostId);
        
        const takeFeatures = async( post ) => {
            const featuresOfPost = await FeatureOfPost.findAll({where: {losted_id:post.id}});
            
            let thisPost;

            let featuresCreateds = [];

            for ( feature of featuresOfPost ){
                const fet = await Features.findByPk(feature.dataValues.feature_id)
            
                featuresCreateds[featuresCreateds.length]=fet.dataValues;
            
                if (featuresCreateds.length == featuresOfPost.length){
                    thisPost = {...post, features: featuresCreateds };
                }
            }
            return thisPost;
        };

        const takeHealthProblems = async( post ) => {
            const healthProblemsOfPost = await HealthProblemsOfPost.findAll({where:{LostedPostId: post.id}});
            let HealthProblemsArr =[];
            let thisPost;
            for ( problem of healthProblemsOfPost ){
               
                const thisProblem = await HealthProblems.findByPk(problem.dataValues.HealthProblemId);

                HealthProblemsArr[HealthProblemsArr.length]=thisProblem.dataValues;

                if( healthProblemsOfPost.length == HealthProblemsArr.length ){
                    thisPost = {...post, HealthProblem: HealthProblemsArr};
                }
            }
            return thisPost;
        };

        const postWithFeatures = await takeFeatures(post.dataValues);
        const postWithProblems = await takeHealthProblems(postWithFeatures ? postWithFeatures : post.dataValues);
            
        const completePost = postWithProblems ? postWithProblems : ( postWithFeatures ? postWithFeatures : post.dataValues ); 
        
        return res.status(200).send(completePost);
        
    },
    filterByGenre : async( req , res , next) => {
        const { G } = req.query;

        const genreBD = G && await Genre.findOne({where:{genre:G}});
        
        if ( !genreBD )  return next();
        
        const PostsWithGenreFiltred = await LostedPost.findAll({where:{genre_id:genreBD.dataValues.id}});

        if ( !PostsWithGenreFiltred ) return next();
        
        req.body.filtredPosts = PostsWithGenreFiltred;

        return next();
    },
    filterByFeatures : async( req , res , next) => {
        const { F } = req.query;
        
        if(!F) return next();

        var AllPostsWithFeatures = [];

        for ( f of F ) {
            const feature = f && await Features.findOne({where:{feature:f}});
        
            const featuresOnPost = feature && await FeatureOfPost.findAll({where:{feature_id:feature.dataValues.id}});

            for ( featureOnPost of featuresOnPost ) {
                if( req.body.filtredPosts ){
                    for( post of req.body.filtredPosts ){
                        if( post.dataValues.id == featureOnPost.dataValues.losted_id ){
                            AllPostsWithFeatures[AllPostsWithFeatures.length]=post.dataValues;
                        }
                    }
                }else{
                    AllPostsWithFeatures[AllPostsWithFeatures.length]=await LostedPost.findByPk(featureOnPost.dataValues.losted_id);
                }
            }
        }
            
        req.body.filtredPosts = AllPostsWithFeatures;

        return next();
    },
    filterByProblems : async( req , res , next ) => {
        const { H } = req.query;

        if(!H) return next();

        var AllPostsWithFeatures = [];

        for ( h of H ) {

            const problem = h && await  HealthProblems.findOne({where:{problem:h}});

            const problemsOnPost = problem && await HealthProblemsOfPost.findAll({where:{LostedPostId:problem.dataValues.id}});

            for ( problemOnPost of problemsOnPost ) {
                if( req.body.filtredPosts ){
                    for( post of req.body.filtredPosts ){
                        if( post.dataValues.id == problemOnPost.dataValues.losted_id ){
                            AllPostsWithFeatures[AllPostsWithFeatures.length]=post.dataValues;
                        }
                    }
                }else{
                    AllPostsWithFeatures[AllPostsWithFeatures.length]=await LostedPost.findByPk(featureOnPost.dataValues.losted_id);
                }
            }
        }
            
        req.body.filtredPosts = AllPostsWithFeatures;
        return res.send(req.body.filtredPosts)
    },
    store  : async( req, res) => {
        const  id_user  = req.userId;

        const { name, description, borned_at, name_of_genre } = req.body;

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
        
        return res.status(201).send({...Post.dataValues, features: featuresCreateds });   
    },
    update : async( req, res) => {
        const { idPost } = req.params;
        
        const  id_user  = req.userId;

        const { name, description, borned_at, name_of_genre } = req.body;

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