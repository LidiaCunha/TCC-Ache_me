//importando o express
const express = require('express')

//importando cors
const cors = require("cors")

// importando arquivo de rotas 
const rotas = require('./routes')

// importando a conexão com o banco de dados
require('./database')

// instanciando o express
const app = express()


// habilitando cors para qualquer origem
app.use(cors());

// diz para o servidor que ele pode receber respostas do tipo json
app.use(express.json())

// dizendo para o servido usar o arquivo de rotas
app.use(rotas)

// exportando/retornando a variavel app
module.exports = app

