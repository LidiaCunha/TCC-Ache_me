const express = require('express');
const Users = require('./controllers/users');
const middleware = require('./middlewares/autorization');
const routes = express.Router();
const validMail = require('./validation/sendMailOnCreate/index');
const multer = require('multer');
const imageUpload = require('./services/firebase/firebase');

const Multer = multer({
    storage : multer.memoryStorage(),
	limits  : 1024*1024,
})

routes.post('/newUser', Multer.single("photo"), validMail , imageUpload , Users.store);
routes.get('/users', Users.index);

routes.use(middleware);

routes.put('/users/:userId', Users.update);
routes.delete('/users/:userId', Users.delete);

module.exports = routes;