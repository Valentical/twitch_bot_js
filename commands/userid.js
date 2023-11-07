const got = require('got')
const { sleep } = require('../utils/utils.js')

module.exports = {
    name: 'getuserid',
    description: "Gets user's id, getuserid <name>",
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        const name = context.message.args[0].toLowerCase();
        const data = await got(`https://api.ivr.fi/v2/twitch/user?login=${name}`).json();
        const id = data[0].id

        const isBanned = data[0].banned
        if (isBanned) {
            const ban = '\u{26d4}'
            const banReason = data[0].banReason
            return { text: `This user's id is: ${id} | Reason: ${banReason} ${ban}`, reply: false }
        }
        else {
            const ban = data[0].banned
            return { text: `This user's id is: ${id} | Banned: ${ban}`, reply: false }
        }
    },
};