const utils = require('../utils/utils.js')
const {sleep} = require('../utils/utils.js')
const config = require('../config.json')

module.exports = {
    name: 'stalk',
    description: 'Last seen chat message of an user',
    permission: 1,
    cooldown: 5000,
    aliases: [],
    prefix: '&',
    execute: async context => {
        const user = msg.args[0].toLowerCase().replace('@', '')
        const query = await utils.query(`SELECT message, timestamp, channel_login FROM messages WHERE user_login=? ORDER BY id DESC LIMIT 1`, [user])
        if (!query.length) return { text: "I've never seen that user in chat", reply: true }
        return {
            text: `that user's last seen message was sent ${utils.humanize(query[0].timestamp)} ago in ${query[0].channel_login === user ? 'his' : `${query[0].channel_login}'s`} chat: ${query[0].message}`,
            reply: true
        }
    },
};