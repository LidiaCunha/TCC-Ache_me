const States = require('../models/States');

module.exports = {
    store: async( req , res ) => {
        const { name_of_state } = req.body;

        const alreadyExists = await States.findOne({ where: {name_of_state}});
        
        if ( alreadyExists ) 
            return res.status(400).send({"error":"this state already exists"})
        
        const stateCreated = await City.create({name_of_state});

        return stateCreated ?  res.status(201).send(stateCreated) : res.status(404).send({"error":"some error to create"})
    },
    index: async( res ) => {
        const states = await States.findAll();

        return res.status(201).send(states)
    },
    delete: async( req , res ) => {
        const {stateId} = req.params;
        
        const stateDeleted = await States.destroy({where:{id:stateId}})
        
        if(!stateDeleted){
            return res.status(401).send({"error":"something is wrong!"})
        }
        return res.sendStatus(201);
    }
}