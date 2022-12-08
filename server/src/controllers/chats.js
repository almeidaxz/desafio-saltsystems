const knex = require('../services/dbConnection');

const listChats = async (req, res) => {
    try {
        const chatList = await knex('chats');

        return res.status(200).json(chatList);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Erro no servidor.' });
    }
}

const listChatMessages = async (req, res) => {
    const { chat_id } = req.params;

    try {
        const chatMessages = await knex('messages').where({ chat_id });

        return res.status(200).json(chatMessages);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Erro no servidor.' });
    }
}

module.exports = { listChats, listChatMessages };