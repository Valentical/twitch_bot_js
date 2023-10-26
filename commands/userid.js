const got = require('got')
const { sleep } = require('../utils/utils.js')

module.exports = {
    name: 'getuserid',
    description: "Gets user's id",
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        await sleep(1500)
        const helix = await got(`https://api.twitch.tv/helix/users`).text()
        return { text: data, reply: true }
    },
};