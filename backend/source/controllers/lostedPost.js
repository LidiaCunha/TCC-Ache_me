const LostedPost = require('../models/LostedPost');
const Genre = require('../models/Genre');
const { Op } = require('sequelize');
const moment = require('moment');

module.exports = {
    index  : async( req, res) => {
        const posts = await LostedPost.findAll();

        return res.status(200).send(posts);
    },
    store  : async( req, res) => {
        const  id_user  = req.userId;

        const { name, description, borned_at, name_of_genre } = req.body;

        const { firebaseUrl } = req.file;

        if ( !(name && description && borned_at && firebaseUrl) ) {
            return res.status(401).send({"error":"you need to pass all arguments"})
        }
    
        const gengeAlreadyExists = await Genre.findOne({genre:name_of_genre});

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

        return res.status(201).send(Post);
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