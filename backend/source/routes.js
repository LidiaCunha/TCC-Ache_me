const express = require('express');
const Users = require('./controllers/users');
const middleware = require('./middlewares/autorization');
const routes = express.Router();


routes.post('/newUser', Users.store);
routes.get('/users', Users.index);

routes.use(middleware);

routes.put('/users/:userId', Users.update);
routes.delete('/users/:userId', Users.delete);

module.exports = routes;