//messsagesController.js

const db = require("../db")

//get messages
async function getAllMessages(){
    const { rows } = await db.query(`
        SELECT messages.id, messages.message, messages.date, messages.user_id, users.username AS users
        FROM messages
        JOIN users ON messages.user_id = users.id
        `);

        return rows;
};

async function addMessage(messageText, userID){
    await db.query(`
        INSERT INTO messages (message, user_id)
        VALUES ($1, $2)`,
        [messageText, userID]
    );
}



// 


module.exports = {getAllMessages, addMessage};