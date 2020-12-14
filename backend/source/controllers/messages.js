const Message = require("../models/Message");
const Users = require("../models/Users");
const { Op } = require("sequelize");

module.exports = {
    send : async( req , res ) => {
        const { message } = req.body;
        const { recipient } = req.params;
        const { userId : sender } = req;
        const { firebaseUrl } = req.file ? req.file : "";

        if ( sender == recipient )
            return res.status(400).send({"erro": "Impossivel mandar mensagens para voce mesmo"})

        if ( !message && !firebaseUrl )
            return res.status(400).send({"erro": "Impossivel enviar uma mensagem sem conteúdo"})

        const msg = (recipient && sender ) && await Message.create({sender, recipient , message, photo:firebaseUrl})

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
    conversations : async( req , res ) => {
        const { userId } = req;
    
        const conversationWithThisUser = await Message.findAll({where:{[Op.or]:[{sender:userId},{recipient:userId}]}})
    
        var contacts = [];
        let contactsWithLastMessage = [];

        conversationWithThisUser.forEach( conversation => {
            if(contacts.length > 0){ 
                contacts.map( contact => {     
                    if(contact !== conversation.recipient && contact !== conversation.sender) {
                        conversation.dataValues.sender === userId ? 
                        contacts[contacts.length]=conversation.dataValues.recipient : 
                        contacts[contacts.length]=conversation.dataValues.sender;
                    }
                })
            }else{
                conversation.dataValues.sender === userId ? 
                contacts[contacts.length]=conversation.dataValues.recipient : 
                contacts[contacts.length]=conversation.dataValues.sender;
            }
        });

        for (id of contacts){
            const contact = await Users.findOne({where:{id}});

            const lastMessage = await Message.findOne({
                order:[
                    ['id','DESC']
                ],
                where:{
                    [Op.and]:[
                        {[Op.or]:[{sender:id},{recipient:id}]},
                        {[Op.or]:[{sender:userId},{recipient:userId}]}
                    ]
                }
            });

            const contatct = await contact.dataValues;
            const lastMsg = await lastMessage.dataValues;
            
            contactsWithLastMessage[contactsWithLastMessage.length] = {contact:contatct,lastMessage:lastMsg};
        }
 
        return contactsWithLastMessage ? res.send(contactsWithLastMessage) : res.status(401);
    },
    delete: async( req , res ) => {
        const { id } = req.params;
        
        const wasDeleted = await Message.destroy({where:{id}});
    
        return wasDeleted ? res.status(301).send({'success':'mensagem deletada com sucesso'}) : res.status(401).send({'error':'not found the message'});
    }
}