const req = require('supertest');
const connection = require('../../../source/database');
const app = require('../../../source/app');
const truncate = require('./truncate');
//const picture = require('../icon.png');

describe('LOSTED_POST', ( ) => {
    jest.useFakeTimers();

    afterAll( ( ) => {
        connection.close();
    });

    beforeEach( async done => {
        await truncate(connection.models);

        done();
    });

    it( "Deve criar uma postagem", ( ) => {
        const res = async ( ) => {
            const data = new FormData();

            data.append('name',"str str")
            data.append('description',"str str str str str str str str stsr")
            data.append('borned_at',"26/09/2002")
            data.append('name_of_genre',"Masculino")
  //          data.append('photo',picture)

            return await req(app).post("/posts").send(data);
        }

        expect(res).toBeTruthy();
    });

});
