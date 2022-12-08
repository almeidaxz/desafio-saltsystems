const knex = require('knex');

const userSignIn = async (req, res) => {
    const { name, email } = req.body;

    try {
        const existingUser = await knex('users').where({ email }).first();
        if (!existingUser) {
            const newUser = await knex('users').insert({ name, email }).returning('*');

            return res.status(201).json(newUser);
        }

        return res.status(200).json(existingUser);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Erro no servidor.' });
    }
}

module.exports = {
    userSignIn
}