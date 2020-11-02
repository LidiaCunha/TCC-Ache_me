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
        // pegar 2 ids de usuario
        const {id, id2} = req.params;

        if ( id != req.userId && id2 != req.userId )
            return res.send({"error":"um dos usuarios devem ser o que está logado"});

        // organizar a conversa dos usuarios
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

        // enviar a conversa
        return messagesBetweenThey ? res.send(messagesBetweenThey) : res.status(401).send({"error":"não foram encontradas conversas entre eles"});
    },
}