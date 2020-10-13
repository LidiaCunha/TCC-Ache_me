const Found = require('../models/Found');
const Address = require('../models/Address');
const City = require('../models/City');
const States = require('../models/States');

const moment = require('moment');

module.exports = {
	store : async ( req , res ) => {
		const { street, bairro, cep, reference_point, complement , city , state , found_at } = req.body;

		const { losted_id } = req.params;

        const { firebaseUrl } = req.file ? req.file : "";

        if ( !( losted_id && found_at && firebaseUrl ) ) {
            return res.status(401).send({"error":"Você precisa preencher todos os campos"})
        }

		const alreadyWasFound = await Found.findOne({where:{losted_id}});

		if ( alreadyWasFound )
			return res.status(400).send({"error":"esse usuario já foi encontrado"});

		const cityExists = await City.findOne({ where: { name_of_city : city } }); 

		const city_id = cityExists ? cityExists.dataValues.id : await City.create({name_of_city:city}).dataValues.id;

		const stateExists =  await States.findOne({ where: { name_of_state : state } });

		const state_id =  stateExists ? stateExists.dataValues.id : await States.create({ name_of_state : state }).dataValues.id;

		const founded_address = await Address.create({ street, bairro, cep, reference_point, complement , city_id , state_id });

		const found = await Found.create({found_at: moment(found_at,'ddd, D MMM YYYY H:mm:ss Z').format(), photo:firebaseUrl, losted_id, address_id: founded_address.dataValues.id});

		if ( found )
			return res.status(201).send(found);

		return res.status(507).send({"error":"erro no sequelize"});		
	},

	index : async ( req , res ) => {
		const founds = await Found.findAll();

		var AllFounds = [];

		founds.forEach( async found => {
			const address = await Address.findByPk(found.dataValues.address_id);
		
			const thisFound = {
				...found.dataValues,
				address : {
					...address.dataValues
				}
			}
			
			AllFounds[AllFounds.length] = thisFound;
		
			if( AllFounds.length == founds.length ) {
				return res.status(300).send(AllFounds); 
			}; 
		} );
	},
};