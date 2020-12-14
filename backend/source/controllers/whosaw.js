const Seen = require('../models/Seen');
const Address = require('../models/Address');
const States = require('../models/States');
const City = require('../models/City');
const WhoSaw = require('../models/WhoSaw');
const LostedPost = require('../models/LostedPost');
const Users = require('../models/Users');


module.exports = {
	confirmedOrUnconfirmed : async( req , res ) => {
		const { seen_id , whosaw_id } = req.params;

		const { userId } = req;

		const seen = await Seen.findByPk(seen_id);
		const post = await LostedPost.findByPk(seen.dataValues.losted_id);
        const userPostCreator = await Users.findByPk(post.dataValues.id_user);
        const whosaw = await WhoSaw.findByPk(whosaw_id);
        
		if ( userId == userPostCreator.dataValues.id ){
			await WhoSaw.update({confirm:!whosaw.dataValues.confirm},{where:{id:whosaw_id}});
			
			const user_who_saw = await Users.findByPk(whosaw.dataValues.id_user_who_saw)

			if(!whosaw.dataValues.confirm){
				await Users.update({merit:user_who_saw.dataValues.merit+1},{where: {id : whosaw.dataValues.id_user_who_saw}})

				return res.status(303).send({"sucess":"o visto foi confirmado!!"})
			}else{
				await Users.update({merit:user_who_saw.dataValues.merit-1},{where: {id : whosaw.dataValues.id_user_who_saw}})	

				return res.status(303).send({"sucess":"o visto foi desconfirmado!!"});
			}
		}   
		return res.status(401).send({"error":"voce não pode confirmar uma postagem que não foi sua!!"});
    },
}