const req = require('supertest');
const connection = require('../../../source/database');
const app = require('../../../source/app');
const truncate = require('./truncate');

describe('USERS', ( ) => {

    jest.useFakeTimers();

    afterAll( ( ) => {
        connection.close();
    });

    beforeEach( async done => {
        await truncate(connection.models);

        done();
    });

    it( "Deve enviar um email para validação" , ( ) => {
        
        const res = async () => {
            return await req(app).post("/newUser").send({
                name: "iuri", 
                CPF: "29292299",
                mail: "iurisampaio18@gmail.com",
                telephone: "23456787654",
                password: "323434",
                cep:"01928399" , 
                bairro:"remedios" , 
                street :"remedios", 
                number : "13",
                complement :"343",
                city :"osasco", 
                state:"sp"
            });
        }
        
        expect(res).toBeTruthy(); // significa que o email foi enviado
    });

    it( "Deve validar o email ao clicar no link" , ( ) => {
        const res = async () => {
            ///?&name=iuri&mail=iurisampaio18@gmail.com&CPF=29292299&telephone=23456787654&password=323434&cep=01928399&bairro=remedios&street=remedios&number=13&city=osasco&complement=343&state=sp&photo=undefined
            return await req(app).get("/validMail").query({
                name: "iuri", 
                CPF: "29292299",
                mail: "iurisampaio18@gmail.com",
                telephone: "23456787654",
                password: "323434",
                cep:"01928399" , 
                bairro:"remedios" , 
                street :"remedios", 
                number : "13",
                complement :"343",
                city :"osasco", 
                state:"sp"
            });
        };

        expect(res).toBeTruthy();
    });

    it( "Deve retornar os dados do usuario ao logar" , ( ) => {
        const res = async( ) => {
            return await req(app).post("/users").body({
                mail: "iurisampaio18@gmail.com",
                password: "323434"
            });
        };

        expect(res).toBeTruthy();
        // expect(res.body).toHaveProperty('token');
        // expect(res.body).toHaveProperty('user');
    });
});
