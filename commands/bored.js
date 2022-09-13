const got = require('got')
const { sleep } = require('../utils/utils.js')

module.exports = {
    name: 'bored',
    description: "Tells the user a random activity to do",
    permission: 1,
    cooldown: 5000,
    aliases: [],
    prefix: '&',
    execute: async context => {
        await sleep(2000)
        const data = await got(`http://www.boredapi.com/api/activity?participants=1`).json()
        return { text: data.activity, reply: true }
    },
};
