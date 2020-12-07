const Squelize = require('sequelize');
// pegando o obj de configuração exportado pelo arquivo 
const dbConfig = require('../config/config');
// criando a conexão com banco pelo sequelize passando o objeto de conexão criado 
const conection  = new Squelize( dbConfig.url, dbConfig.config );
// AQUI DEVESE IMPORTAR OS MODELS
const Users = require('../models/Users');
const States = require('../models/States');
const City = require('../models/City');
const WhereLive = require('../models/WhereLive');
const LostedPost = require('../models/LostedPost');
const Comment = require('../models/Comment');
const Genre = require('../models/Genre');
const Features = require('../models/Features');
const FeatureOfPost = require('../models/FeatureOfPost');
const HealthProblems = require('../models/HealthProblems');
const HealthProblemsOfPost = require('../models/HealthProblemsOfPost');
const Address = require('../models/Address');
const Seen = require('../models/Seen');
const WhoSaw = require('../models/WhoSaw');
const Found = require('../models/Found');
const Message = require('../models/Message');

// AQUI DEVESE INICIAR AS MODELS

States.init(conection);
City.init(conection);
WhereLive.init(conection);
Users.init(conection);
LostedPost.init(conection);
Comment.init(conection);
Genre.init(conection);
Features.init(conection);
FeatureOfPost.init(conection);
HealthProblems.init(conection);
HealthProblemsOfPost.init(conection);
Address.init(conection);
Seen.init(conection);
WhoSaw.init(conection);
Found.init(conection);
Message.init(conection);

// AQUI DEVESE FAZER AS ASSOCIAÇÕES(RELACIONAMENTO) ENTRE AS MODELS

States.associete(conection.models);
City.associete(conection.models);
WhereLive.associete(conection.models);
Users.associete(conection.models);
LostedPost.associete(conection.models);
Comment.associete(conection.models);
Genre.associete(conection.models);
Features.associete(conection.models);
FeatureOfPost.associete(conection.models);
HealthProblems.associete(conection.models);
HealthProblemsOfPost.associete(conection.models);
Address.associete(conection.models);
Seen.associete(conection.models);
WhoSaw.associete(conection.models);
Found.associete(conection.models);
Message.associete(conection.models);

// exportando a conexçao
module.exports = conection; 