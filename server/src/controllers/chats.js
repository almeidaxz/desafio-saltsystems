const knex = require('../services/dbConnection');

const listChats = async (req, res) => {
    const { user_id } = req.params;

    try {
        const chatList = await knex('chats').where({ user1_id: user_id });

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

const createChat = async (req, res) => {
    const { user1_id, user2_id, user1_name, user2_name } = req.body;

    try {
        await knex('chats').insert({ user1_id, user2_id, user1_name, user2_name });

        return res.status(201).json();
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Erro no servidor.' });
    }
}

const sendMessage = async (req, res) => {
    const { chat_id, sender_id, receiver_id, message_body, send_time } = req.body;

    try {
        await knex('messages').insert({ chat_id, sender_id, receiver_id, message_body, send_time });

        return res.status(201).json();
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Erro no servidor.' });
    }
}

module.exports = { listChats, listChatMessages, createChat, sendMessage };