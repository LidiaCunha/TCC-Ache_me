const HealthProblems = require('../models/HealthProblems');
const HealthProblemsOfPost = require('../models/HealthProblemsOfPost');
const {Op} = require('sequelize')

module.exports = {
    store  : async( req , res ) => {
        const { PostId } = req.params;
        const { problem } = req.body;

        const problemExists = await HealthProblems.findOne({ where: {problem}});

        if ( !problemExists ) {
            var problemNowExists = await HealthProblems.create({problem});
        }

        const toTakeId = problemNowExists ? problemNowExists : problemExists;  
               
        const alreadyExistsInPost = await HealthProblemsOfPost.findOne({ where: { [Op.and] : [  {HealthProblemId:toTakeId.dataValues.id },{LostedPostId:PostId} ] } });

        if ( alreadyExistsInPost ) 
            return res.status(300).send({"error":"Este problema de saúde já existe na postagem"})
        

        const wasCreated = await HealthProblemsOfPost.create( { HealthProblemId : toTakeId.dataValues.id , LostedPostId: PostId } );
        
        return wasCreated ? res.status(201).send({wasCreated,problem:toTakeId.dataValues.problem}) : res.status(500).send({"error":"Erro no processo de criação"});
    },
    index  : async( req , res ) => {
        const { PostId } = req.params;

        const idProblems = await HealthProblemsOfPost.findAll({where : { LostedPostId: PostId}})

        const Problems = [];
        for ( idProblem of idProblems){
            const Problem = await HealthProblems.findByPk(idProblem.dataValues.HealthProblemId);
           
            Problems[Problems.length]={userCreatorId:req.userId,PostId:PostId,problem:Problem.dataValues.problem,problemId:idProblem.dataValues.id}
        }
        
        return Problems ? res.status(200).send(Problems) : res.status(500).send({"error":"qualquer postagem encontrada nesta postagem"})
    },
    
};

