const HealthProblems = require('../models/HealthProblems');

module.exports = {
    store  : async( req , res ) => {
        const { problem } = req.body;

        const alreadyExists = await HealthProblems.findOne({where:{problem}});

        if ( alreadyExists )
            return res.status(302).send({"error":"this health problem already exists"});
        
        const wasCreated = await HealthProblems.create({problem});
    
        if ( wasCreated ) 
            return res.status(201).send(wasCreated);
        
        return res.status(500).send({"error":"can't create health problem"});
    },
    index  : async( req , res ) => {
        const allHealthProblems = await HealthProblems.findAll();

        return res.status(200).send(allHealthProblems);
    },
    delete : async( req , res ) => {
        const { HealthProblemId } = req.params;

        const wasDeleted = await HealthProblems.destroy({where: {HealthProblemId}});
    
        return wasDeleted ? res.status(200).send({"sucess":"deleted"}) : res.status(404).send({"error":"Not deleted"});
    },
    update : async( req , res ) => {
        const { HealthProblemId } = req.params;
        const { problem } = req.body;

        const wasUpdated = await HealthProblems.destroy({problem},{where: {HealthProblemId}});
    
        return wasUpdated ? res.status(200).send({"sucess":"updated"}) : res.status(404).send({"error":"Not updated"});
    },
};