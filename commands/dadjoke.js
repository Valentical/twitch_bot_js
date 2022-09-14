const got = require('got');
const { sleep } = require ('../utils/utils.js')

module.exports = {
    name: 'dadjoke',
    description: 'Random dad joke',
    permission: 1,
    cooldown: 5000,
    aliases: [],
    prefix: '&',
    execute: async context => {
        await sleep(2000)
        const { joke } = await got("https://icanhazdadjoke.com/j/kOfaUvP7Muc").json()
        return { text: joke, reply: false }
    },
};