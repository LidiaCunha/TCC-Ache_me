const Comment = require('../models/Comment');


module.exports = {
    index  : async( req , res ) => {
        const comments = await Comment.findAll();
    
        res.status(201).send(comments);
    },
    store  : async( req , res ) => {
        const { idPost } = req.params;
        
        const  id_user  = req.userId;

        const { comment } = req.body;

        const commentCreated = await Comment.create({comment, id_user, id_losted:idPost});
    
        if(commentCreated){
            return res.status(201).send(commentCreated);
        }

        return res.status(404).send({"error":"Algo deu errado!!"});
    },
    update : async( req , res ) => {
        const { idPost, idComment } = req.params;
        
        const  id_user  = req.userId;

        const { comment } = req.body;

        const commentExists = await Comment.findByPk(idComment);

        if ( !commentExists && commentExists.dataValues.id_user != id_user )
            return res.status(404).send({"error":"Você não pode alterar este comentário"});    
        
        const commentUpdated = await Comment.update({comment},{where: {id:idComment}});

        if ( !commentUpdated )
            return res.status(401).send({"error":"Comentário não foi atualizado"});
        
        return res.status(201).send({"sucess":true});
    },
    delete : async( req , res ) => {
            const { idComment } = req.params;

            const deletedComment = await Comment.destroy({where:{id:idComment}});

            if ( !deletedComment ){
                return res.status(404).send({"error":"NÃO ENCONTRADO"})
            }
            return res.status(201).send({"sucess":true, ...deletedComment});
    },
};