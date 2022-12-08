const express = require('express');
const routes = express();
const { userSignIn } = require('./controllers/users');
const { listChats, listChatMessages } = require('./controllers/chats');

routes.get('/', (req, res) => {
    return res.status(200).json({ message: "Servidor ativo" });
});

routes.post('/login', userSignIn);
routes.get('/chat_list', listChats);
routes.get('/chat_messages', listChatMessages);

module.exports = routes;