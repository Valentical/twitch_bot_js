const got = require('got');
const { sleep } = require ('../utils/utils.js')

module.exports = {
    name: 'dadjoke',
    description: 'Random dad joke',
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        const { joke } = await got("https://icanhazdadjoke.com/").json()
        return { text: joke, reply: false }
    },
};