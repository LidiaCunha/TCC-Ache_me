const Messages = require('../model/Messages');
const {Op} = require('sequelize')


module.exports = {
	sendMessage : async( sendBy, recibedBy, message ) => {
	
		const wasSended = await Messages.create({ sendBy, recibedBy, message });
	
		if ( wasSended )
			return wasSended;
		
		return res.status(400).send({"error":"não foi possivel enviar a mensagem."})
	},
	getMessagesRecibedsBy : async( req , res ) => {
		const { recibedBy } = req.query;

		const messages = await Messages.findAll({where: { recibedBy }, order:[['createdAt', 'DESC']]  });
	
		if (messages)
			return res.status(200).send(messages)

		return res.status(401).send({notfound:"esse usuario nunca recebeu mensagens"})
	},
	getMessagesSendedBy : async( req , res ) => {
		const { sendBy } = req.query;

		const messages = await Messages.findAll({where: { sendBy }, order:[['createdAt', 'DESC']] });
	
		if (messages)
			return res.status(200).send(messages)

		return res.status(401).send({notfound:"esse usuario nunca enviou mensagens"})
	},
	getMessagesSendedByAndRecibedBy : async( req , res ) =>{
		const {sendBy, recibedBy} = req.query;
	
		const messages = await Messages.findAll({where: {[Op.and]: {sendBy, recibedBy} }, order:[['createdAt', 'DESC']] });
	
		if (messages)
			return res.status(200).send(messages)

		return res.status(401).send({notfound:"esse usuario nunca enviou mensagens"})
	},
	getConversationBetween : async( req , res ) => {
		const { id1 , id2 } = req.params;

		const messages = await Messages.findAll({
			where: {
				[Op.or]:[
					{
						[Op.and]:[
							{
								sendBy    : id1,
								recibedBy : id2
							}
						],
						[Op.and]:[
							{
								sendBy    : id2,
								recibedBy : id1
							}
						],
					}
				]
			},
			order:[
				['createdAt', 'DESC']
			]
		})

		if(messages)
			return res.status(200).send(messages)

		return res.status(404).send({"notfound":"não existem conversas entre esses usuarios"}) 
	}

}