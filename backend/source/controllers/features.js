const Features = require('../models/Features');

module.exports = {
    store: async( req , res ) => {
        const { feature } = req.body;
        
        const wasCreated = await Features.create({feature});
    
        if (wasCreated){
            return res.status(201).send(wasCreated);
        }
        return res.status(501).send({"error":"Erro!"})
    },
    index: async( req , res ) => {
        const features = await Features.findAll();
        
        res.status(201).send(features);
    },
    update: async( req , res ) => {
        const wasUpdated = await Features.update({feature:req.body.feature},{where:{id:req.params.FeatureId}});
        if (wasUpdated)
            return res.status(200).send({"success":"Atualizado com sucesso!!"});
        return res.status(500).send({"error":"Não atualizado"});
    },
    delete: async( req , res ) => {
        const wasDeleted = await Features.destroy({where: {id:req.params.FeatureId}});
        if(wasDeleted)
            return res.status(200).send({"sucess":"Deletado"});
        return res.status(500).send({"error":"Não foi deletado"});
    },
};
