const Squelize = require('sequelize');
// pegando o obj de configuração exportado pelo arquivo 
const dbConfig = require('../config/config');
// criando a conexão com banco pelo sequelize passando o objeto de conexão criado 
const conection  = new Squelize(dbConfig);
// AQUI DEVESE IMPORTAR OS MODELS
const Users = require('../models/Users')

// AQUI DEVESE INICIAR AS MODELS

Users.init(conection)

// AQUI DEVESE FAZER AS ASSOCIAÇÕES(RELACIONAMENTO) ENTRE AS MODELS

//exemplo:  Model.associate(conection.models)


// exportando a conexçao
module.exports = conection; 