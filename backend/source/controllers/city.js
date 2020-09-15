const City = require('../models/City');

module.exports = {
    store: async( req , res ) => {
        const { name_of_city } = req.body;

        const alreadyExists = await City.findOne({ where: {name_of_city}});
        
        if ( alreadyExists ) 
            return res.status(400).send({"error":"this city already exists"})
        
        const cityCreated = await City.create({name_of_city});

        return cityCreated ?  res.status(201).send(cityCreated) : res.status(404).send({"error":"some error to create"})
    },
    index: async( res ) => {
        const citys = await City.findAll();

        return res.status(201).send(citys)
    },
    delete: async( req , res ) => {
        const { cityId } = req.params;
        
        const cityDeleted = await City.destroy({where:{id:cityId}})
        
        if(!cityDeleted){
            return res.status(401).send({"error":"something is wrong!"})
        }
        return res.sendStatus(201);
    }
}