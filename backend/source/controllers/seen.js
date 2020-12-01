const Seen = require('../models/Seen');
const Address = require('../models/Address');
const States = require('../models/States');
const City = require('../models/City');
const WhoSaw = require('../models/WhoSaw');
const LostedPost = require('../models/LostedPost');
const Users = require('../models/Users');

const moment = require('moment');

module.exports = {
    index: async( req , res ) => {
        const seens = await Seen.findAll();
        let AllLostedSeen = [];

        seens.forEach(async (seen) =>{
           
            const address = await Address.findByPk(seen.dataValues.address_id);
            const post = await LostedPost.findByPk(seen.dataValues.losted_id);
            const userPostCreator = await Users.findByPk(post.dataValues.id_user);
            const whoSaw = await WhoSaw.findAll({where:{id_losted_seen:seen.dataValues.id}});

            whoSaw.forEach( who_saw => {
                
                const userCreatorRegister = Users.findOne({where:{id:who_saw.dataValues.id_user_who_saw}});
                
                var thisSeen = {
                    Seen:{
                        ...seen.dataValues, 
                        address:{
                            ...address.dataValues
                        }
                    },
                    WhoSaw:{
                        ...who_saw.dataValues,
                        ...userCreatorRegister.dataValues
                    },
                    LostedThatWasSeen:{
                        ...post.dataValues, 
                        postCreator:{
                            ...userPostCreator.dataValues
                        }
                    }
                };
                AllLostedSeen[ AllLostedSeen.length] = thisSeen;
            })             

            if(AllLostedSeen.length == seens.length)
                return res.status(201).send(AllLostedSeen);    
        });
    },
    store: async( req , res ) => {
        const { street, bairro, cep, reference_point, complement , city , state , seen_at_date, seen_at_hours  } = req.body;
        
        const { PostId } = req.params;

        const CreatorId = req.userId;
    
        let CityR = await City.findOne({ where: { name_of_city:city } });
        if (! CityR)
            CityR =await City.create({name_of_city:city});
        
        const city_id = CityR.dataValues.id;
        
        let StateR = await States.findOne({ where: { name_of_state:state } });
        if (! StateR )
            StateR =await States.create({name_of_state:state});
        
        const state_id = StateR.dataValues.id;
        
        const address = await Address.create({cep,bairro,street,reference_point,complement, state_id, city_id })
        
        const dateFormatted = moment(seen_at_date+seen_at_hours,'ddd, D MMM YYYY H:mm:ss Z').format(); 

        const view = await Seen.create({seen_at:dateFormatted,losted_id:PostId,address_id:address.dataValues.id});  
        
        const who_saw = await WhoSaw.create({id_user_who_saw: CreatorId,id_losted_seen:view.dataValues.id ,confirm:false})

        const userCreatorRegister = await Users.findByPk(CreatorId);

        const post = await LostedPost.findByPk(PostId);

        const userPostCreator = await Users.findByPk(post.dataValues.id_user);

        const thisSeen = {
            Seen:{
                ...view.dataValues, 
                address:{
                    ...address.dataValues
                }
            },
            WhoSaw:{
                ...who_saw.dataValues,
                ...userCreatorRegister.dataValues
            },
            LostedThatWasSeen:{
                ...post.dataValues, 
                postCreator:{
                    ...userPostCreator.dataValues
                }
            }
        };

        return res.status(201).send(thisSeen);
    },
};