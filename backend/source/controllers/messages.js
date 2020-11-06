const Message = require("../models/Message");
const { Op } = require("sequelize");

module.exports = {
    send : async( req , res ) => {
        const { message } = req.body;
        const { recipient } = req.params;
        const { userId : sender } = req;
        const { firebaseUrl } = req.file ? req.file : "";

        if ( sender == recipient )
            return res.status(400).send({"erro": "impossivel mandar mensagens para voce mesmo"})

        const msg = (message && recipient && sender ) && await Message.create({sender, recipient , message, photo:firebaseUrl})

        return msg ? res.status(201).send(msg) : res.status(501).send({"error":"não foi possivel enviar a mensagem"})
    },
    seeAllBetween : async( req , res ) => {
        const {id, id2} = req.params;

        if ( id != req.userId && id2 != req.userId )
            return res.send({"error":"um dos usuarios devem ser o que está logado"});

        // SELECT  * FROM messages WHERE (messages.sender = id or messages.recipient = id) and (messages.sender = id2 or messages.recipient = id2) 
        const messagesBetweenThey = await Message.findAll({
            where:{
                [Op.and]:[
                    {[Op.or]:[{sender:id},{recipient:id}]},
                    {[Op.or]:[{sender:id2},{recipient:id2}]}
                ]
            },
            order:[
                ['createdAt','ASC']
            ]
        });

        return messagesBetweenThey ? res.send(messagesBetweenThey) : res.status(401).send({"error":"não foram encontradas conversas entre eles"});
    },
    delete: async( req , res ) => {
        const { id } = req.params;
        
        const wasDeleted = await Message.destroy({where:{id}});
    
        return wasDeleted ? res.status(301).send({'success':'mensagem deletada com sucesso'}) : res.status(401).send({'error':'not found the message'});
    }
}