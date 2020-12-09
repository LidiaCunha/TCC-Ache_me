// PEGANDO O APP
const app = require('./app')

const PORT = process.env.PORT || 3001;

// COLOCANDO P RODAR NA PORTA 3001
app.listen(PORT, ( ) => {
    console.log(`O Projeto está rodando na porta ${PORT} !!`)
})

module.exports = PORT;