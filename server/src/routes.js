const express = require('express');
const routes = express();
const { userSignIn } = require('./controllers/users');

routes.get('/', (req, res) => {
    return res.status(200).json({ message: "Servidor ativo" });
});

routes.post('/login', userSignIn);

module.exports = routes;