const Genre = require('../../models/Genre');
const HealthProblems = require('../../models/HealthProblems');
const HealthProblemsOfPost = require('../../models/HealthProblemsOfPost');
const Features = require('../../models/Features');
const FeatureOfPost = require('../../models/FeatureOfPost');
const LostedPost = require('../../models/LostedPost');
const Seen = require('../../models/Seen');
const Address = require('../../models/Address');
const States = require('../../models/States');
const City = require('../../models/City');
const WhoSaw = require('../../models/WhoSaw')

const { Op } = require('sequelize')
const moment = require('moment');

module.exports ={

    filterByGenre    : async ( req , res , next ) => {
        const { G } = req.query;

        const genreBD = G && await Genre.findOne({where:{genre:G}});
        
        if ( !genreBD )  return next();
        
        const PostsWithGenreFiltred = await LostedPost.findAll({where:{genre_id:genreBD.dataValues.id}});

        if ( !PostsWithGenreFiltred ) return next();
        
        req.body.filtredPosts = PostsWithGenreFiltred;

        return next();
    },
    filterByFeatures : async ( req , res , next ) => {
        const { F } = req.query;
        
        if(!F) return next();

        var AllPostsWithFeatures = [];

        if ( typeof(F) == 'object' ){
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
        }else{
            const feature = F && await Features.findOne({where:{feature:F}});
            
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
    filterByAge      : async ( req , res , next ) => {
        const { Amin , Amax } = req.query;

        if ( !Amin && !Amax || Amin >= Amax) return next();

        const filtredPosts = req.body.filtredPosts ? req.body.filtredPosts : await LostedPost.findAll();;
        
        var posts = [];

        filtredPosts.forEach( post => {
            const ageOfPost = moment(post.borned_at).locale("America/Sao_Paulo").format("YYYY");
            
            const now = new Date();
            const peopleAge = now.getFullYear() - ageOfPost;

            if ( Amin <= peopleAge && Amax >= peopleAge ) {
                posts[ posts.length ] = post;
            }
        });

        req.body.filtredPosts = posts;
        
        return next();
    },
    filterByDate     : async ( req , res , next ) => {
        const { Ap , Mp , Dp } = req.query;
    
        const now = new Date();
    
        if ( ( !Ap || !Mp || !Dp) || Ap > now.getFullYear()) return next();

        const filtredPosts = req.body.filtredPosts ? req.body.filtredPosts : await LostedPost.findAll();;
        
        var posts = [];

        filtredPosts.forEach( post => {
            const ageOfPost = moment(post.created_at).locale("America/Sao_Paulo").format("YYYY")
            const mounthOfPost = moment(post.created_at).locale("America/Sao_Paulo").format("MM")
            const dayOfPost = moment(post.created_at).locale("America/Sao_Paulo").format("DD")
            if ( 
                 Ap ? Ap === ageOfPost : ( Mp === mounthOfPost || Dp === dayOfPost ) && 
                 Mp ? Mp === mounthOfPost : ( Dp === dayOfPost || Ap === ageOfPost ) && 
                 Dp ? Dp === dayOfPost : ( Ap === ageOfPost || Mp === mounthOfPost ) 
               ) 
            {
                posts[ posts.length ] = post;
            }
        });

        req.body.filtredPosts = posts;
        
        return next();
    },
    filterByHour     : async ( req , res , next ) => {
        const { Hp } = req.query;

        if (!Hp) return next();

        const filtredPosts = req.body.filtredPosts ? req.body.filtredPosts : await LostedPost.findAll();;
        
        var posts = [];

        filtredPosts.forEach( post => {
            const hourOfPost = moment(post.created_at).locale("America/Sao_Paulo").format("HH");
            Hp === hourOfPost ? posts[posts.length] = post : null;
        });


        req.body.filtredPosts = { posts };

        return next();
    },
    filterByLocale   : async ( req , res , next ) => {
        const { Sa, Str, Br, Cp, Rp, Cm, Stt, Ct } = req.query;

        if( !Sa || !Str || !Br || !Cp || !Rp || !Cm || !Stt || !Ct  ) return next()

        const addtoFilter = {
                    "street":(Str ? Str : null),
                    "bairro":(Br ? Br : null),
                    "cep":(Cp ? Cp : null),
                    "reference_point":(Rp ? Rp : null),
                    "complement":(Cm ? Cm : null),
                    "state":{
                        "name_of_state":(Stt ? Stt : null)
                    },
                    "city":{
                        "name_of_city":(Ct ? Ct : null)
                    }
                };

        const addressOfSeens =  await Address.findAll(
            {
                where:{
                    [Op.or]:{
                    street:addtoFilter["street"],
                    bairro:addtoFilter["bairro"],
                    cep:addtoFilter["cep"],
                    reference_point:addtoFilter["reference_point"],
                }}
            }
        );

        const seens = await Seen.findAll();
        var seensFiltred = [];
        seens.find( 
            seen => 
            { 
                const whenSeen = Sa && filterByWhenWasSeen( seen , Sa) ;
                const whoSaw = filterByWhoSaw( seen )
                
                if ( addressOfSeens && seen && (whenSeen || !Sa) ){
                    for(let i = 0; i < addressOfSeens.length; i++){
                        if ( seen.dataValues.address_id === addressOfSeens[i].dataValues.id){
                            seensFiltred[seensFiltred.length] = {...seen.dataValues , address:{...addressOfSeens[i].dataValues}, who_saw:{whoSaw}}
                        }
                    }
                }

                function filterByWhenWasSeen ( seen , seen_at_to_filter ) {
                    return moment(seen.seen_at).locale("America/Sao_Paulo").format('DD/MM/YYYY')  == seen_at_to_filter ? true : false; 
                }

                async function filterByWhoSaw ( seen ) {
                    const ws = await WhoSaw.findAll({where:{id_losted_seen:seen.id}});
                    return ws;

                }
            }) 

        seensFiltred ? req.body.filtredPosts=seensFiltred : next();

        return next();
    },
    filterByProblems : async ( req , res , next ) => {
        const { H } = req.query;
 //       console.log(req.body.filtredPosts)
        if(!H) return res.status(200).send(req.body.filtredPosts);

        const takePostsWithProblems = async( ObjectOfProblems ) => {
            const problemsAndPosts = await HealthProblemsOfPost.findAll();
            const problems = await HealthProblems.findAll();
            const posts = await LostedPost.findAll();
        
            var AllPostsWithProblems = [];
            ObjectOfProblems.forEach( async problem  => {
                problems.some( ( problemToFind ) => {
                    
                    const problemId = problem.toUpperCase() ==  problemToFind.problem.toString().toUpperCase() ? problemToFind.dataValues.id : false;
                    
                    problemId && problemsAndPosts.filter( ( postAndProblem ) => {
                        
                        const postId = postAndProblem.dataValues.HealthProblemId == problemId ? postAndProblem.dataValues.LostedPostId : false
                        if ( req.body.filtredPosts ){
                            const postsFiltred = postId && req.body.filtredPosts.filter( (post) => {
                                return post ? post.dataValues.id == postId : null;
                            });
                        
                            postsFiltred && postsFiltred.forEach(post => {
                                post ? AllPostsWithProblems[AllPostsWithProblems.length] = post.dataValues : null
                            });
                        }else{
                            const postsFiltred = postId && posts.filter( (post) => {
                                return post.dataValues.id == postId;
                            });
                        
                            postsFiltred && postsFiltred.forEach(post => {
                                post ? AllPostsWithProblems[AllPostsWithProblems.length] = post.dataValues : null
                            });
                        }
                    });
                });
            });

            return AllPostsWithProblems;
        }   
        const takePostsWithProblem = async( StringPorblem ) => {
            const problemsAndPosts = await HealthProblemsOfPost.findAll();
            const problems = await HealthProblems.findAll();
            const posts = await LostedPost.findAll();
        
            var AllPostsWithProblems = [];
            
            problems.some( ( problemToFind ) => {
                    
                const problemId = StringPorblem.toUpperCase() ==  problemToFind.problem.toString().toUpperCase() ? problemToFind.dataValues.id : false;
                    
                problemId && problemsAndPosts.filter( ( postAndProblem ) => {
                        
                    const postId = postAndProblem.dataValues.HealthProblemId == problemId ? postAndProblem.dataValues.LostedPostId : false
                    
                    if ( req.body.filtredPosts ){
                        const postsFiltred = postId && req.body.filtredPosts.filter( (post) => {
                            return post ? post.id == postId : null;
                        });
                    
                        postsFiltred && postsFiltred.forEach(post => {
                            post ? AllPostsWithProblems[AllPostsWithProblems.length] = post : null;
                        });
                    }else{
                        const postsFiltred = postId && posts.filter( (post) => {
                            return post.dataValues.id == postId;
                        });
                    
                        postsFiltred && postsFiltred.forEach(post => {
                            post ? AllPostsWithProblems[AllPostsWithProblems.length] = post.dataValues : null
                        });
                    }
                });
            });
            
            return AllPostsWithProblems;
        }
        
        if ( typeof(H) == 'object' ){
            const posts = await takePostsWithProblems(H);
            req.body.filtredPosts = posts;
        }else{
            const posts = await takePostsWithProblem(H);
            req.body.filtredPosts = posts;
        }

        return res.status(200).send(req.body.filtredPosts)
    },
}