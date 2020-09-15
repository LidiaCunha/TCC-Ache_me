const express = require('express');
const multer = require('multer');

const Users = require('./controllers/users');
const Citys = require('./controllers/city');
const States = require('./controllers/state');
const LostedPost = require('./controllers/LostedPost');
const Comment = require('./controllers/comment')

const middleware = require('./middlewares/autorization');
const validMail = require('./validation/sendMailOnCreate/index');
const imageUpload = require('./services/firebase/firebase');

const routes = express.Router();

const Multer = multer({
    storage : multer.memoryStorage(),
	limits  : 1024*1024,
});

routes.post('/newUser', Multer.single("photo"), validMail , imageUpload , Users.store);
routes.post('/users', Users.login);


routes.use(middleware);


routes.get('/users', Users.index);
routes.put('/users/:userId', Users.updateFieldOfUsers);
routes.put('/users/wherelive/:userId', Users.updateFieldFromWhereUserLive);
routes.delete('/users/:userId', Users.delete);

routes.post('/city', Citys.store);
routes.get('/city', Citys.index);
routes.delete('/city/:cityId', Citys.delete);

routes.post('/state', States.store);
routes.get('/state', States.index);
routes.delete('/state/:stateId', States.delete);

routes.get('/posts', LostedPost.index);
routes.post('/posts', Multer.single("photo"), imageUpload , LostedPost.store);
routes.delete('/posts/:idPost', LostedPost.delete);
routes.put('/posts/:idPost', Multer.single("photo") , imageUpload , LostedPost.update);

routes.get('/posts/:idPost/comments',Comment.index);
routes.post('/posts/:idPost/comments', Comment.store);
routes.put('/posts/:idPost/comments/:idComment',Comment.update);
routes.delete('/posts/:idPost/comments/:idComment',Comment.delete);

module.exports = routes;