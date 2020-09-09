const express = require('express');
const multer = require('multer');

const Users = require('./controllers/users');
const middleware = require('./middlewares/autorization');
const validMail = require('./validation/sendMailOnCreate/index');
const imageUpload = require('./services/firebase/firebase');

const routes = express.Router();

const Multer = multer({
    storage : multer.memoryStorage(),
	limits  : 1024*1024,
})

routes.post('/newUser', Multer.single("photo"), validMail , imageUpload , Users.store);
routes.post('/users', Users.login);


routes.use(middleware);

routes.get('/users', Users.index);
routes.put('/users/:userId', Users.update);
routes.delete('/users/:userId', Users.delete);

module.exports = routes;