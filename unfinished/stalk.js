const config = require('../../config.json')
const utils = require('./utils.js')

module.exports = {
    name: 'stalk',
    description: 'Last seen chat message of an user',
    cooldown: 5000,
    aliases: [],
    execute: async context =>  {
        const user = context.user 
        if (user === config.bot.login) return { text: "I'm here elisDank", reply: true }
        const query = await utils.query(`SELECT message, timestamp, channel_login FROM messages WHERE user_login=? ORDER BY id DESC LIMIT 1`, [user])
        if (!query.length) return { text: "I've never seen that user in chat", reply: true }
        return {
            text: `that user's last seen message was sent ${utils.humanize(query[0].timestamp)} ago in ${query[0].channel_login === user ? 'his' : `${query[0].channel_login}'s`} chat: ${query[0].message}`,
            reply: true
        }
    },
};

// CREATE A DATABASE !!!!