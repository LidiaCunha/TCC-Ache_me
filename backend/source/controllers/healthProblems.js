const HealthProblems = require('../models/HealthProblems');

module.exports = {
    store  : async( req , res ) => {
        const { health_problem } = req.body;

        const wasCreated = await HealthProblems.create({health_problem});
    
        if ( wasCreated ) 
            return res.status(201).send(wasCreated);
        
        return res.status(500).send({"error":"can't create health problem"})
    },
    index  : async( req , res ) => {
        const allHealthProblems = await HealthProblems.findAll();

        return res.status(200).send(allHealthProblems);
    },
};