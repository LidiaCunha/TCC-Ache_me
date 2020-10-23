const HealthProblems = require('../models/HealthProblems');

module.exports = {
    store  : async( req , res ) => {
        const { problem } = req.body;

        const alreadyExists = await HealthProblems.findOne({where:{problem}});

        if ( alreadyExists )
            return res.status(302).send({"error":"Problema de saúde já existente"});
        
        const wasCreated = await HealthProblems.create({problem});
    
        if ( wasCreated ) 
            return res.status(201).send(wasCreated);
        
        return res.status(500).send({"error":"Não pode criar problema de saúde"});
    },
    index  : async( req , res ) => {
        const allHealthProblems = await HealthProblems.findAll();

        return res.status(200).send(allHealthProblems);
    },
    delete : async( req , res ) => {
        const { HealthProblemId } = req.params;

        const wasDeleted = await HealthProblems.destroy({where: {id:HealthProblemId}});
    
        return wasDeleted ? res.status(200).send({"sucess":"Deletado"}) : res.status(404).send({"error":"Não foi deletado"});
    },
    update : async( req , res ) => {
        const { HealthProblemId } = req.params;
        const { problem } = req.body;

        const wasUpdated = await HealthProblems.update({problem},{where: {id:HealthProblemId}});
    
        return wasUpdated ? res.status(200).send({"sucess":"Atualizado com sucesso!!"}) : res.status(404).send({"error":"Não foi atualizado."});
    },
};