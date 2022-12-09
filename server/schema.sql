CREATE DATABASE wpp_clone_bot;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS contacts (
    user_id INTEGER NOT NULL REFERENCES users(id),
    contact_id SERIAL NOT NULL,
    contact_email TEXT NOT NULL,
    contact_name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS chats (
    id SERIAL PRIMARY KEY,
    user1_id INTEGER NOT NULL REFERENCES users(id),
    user2_id INTEGER NOT NULL REFERENCES users(id),
 	user1_name TEXT NOT NULL,
 	user2_name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS messages (
    chat_id INTEGER NOT NULL REFERENCES chats(id),
    sender_id INTEGER NOT NULL REFERENCES users(id),
    receiver_id INTEGER NOT NULL REFERENCES users(id),
    message_body TEXT NOT NULL,
    send_time TEXT NOT NULL
);