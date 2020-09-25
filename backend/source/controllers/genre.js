const Genre = require('../models/Genre');

const { Op } = require('sequelize');

module.exports = {
    store : async( req , res ) => {
        const { genre } = req.body;

        const alreadyExists = await Genre.findOne({where:{genre}});
        
        const wasCreated = alreadyExists ? {"error":"Não atualizado, genêro ja existente"} : await Genre.create({genre});
        
        return wasCreated ? res.status(200).send(wasCreated) : res.status(401).send({"error":"Sequelize não foi criado"})
    },
    index : async( req , res ) => {
        const genres = await Genre.findAll();

        return genres ? res.status(200).send(genres) : res.status(404).send({"error":"NÃO ENCONTRADO"});
    },
    delete : async( req , res ) => {
        const { genreId }= req.params
    
        const wasDeleted = await Genre.destroy({where: {id:genreId}});

        return wasDeleted ? res.status(200).send(wasDeleted) : res.status(401).send({"error":"Não foi possivel deletar."});
    },
    show : async( req , res ) => {
        const { genreId, name_of_genre }= req.params;

        const exist = await Genre.findOne({[Op.or]:{where: {genreId, name_of_genre}}});
    
        return exist ? res.status(200).send(exist) : res.status(401).send({"error":"Não existe"})
    },
};