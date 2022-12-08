const express = require('express');
const routes = express();
const { userSignIn } = require('./controllers/users');
const { listChats, listChatMessages, createChat } = require('./controllers/chats');

routes.get('/', (req, res) => {
    return res.status(200).json({ message: "Servidor ativo" });
});

routes.post('/login', userSignIn);
routes.get('/chat_list', listChats);
routes.get('/chat_messages/:id', listChatMessages);
routes.post('/create_chat', createChat);

module.exports = routes;