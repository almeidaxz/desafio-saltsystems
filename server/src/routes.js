const express = require('express');
const routes = express();
const { userSignIn } = require('./controllers/users');
const { listChats } = require('./controllers/chats');

routes.get('/', (req, res) => {
    return res.status(200).json({ message: "Servidor ativo" });
});

routes.post('/login', userSignIn);
routes.get('/chat_list', listChats);

module.exports = routes;