const got = require('got')
const { sleep } = require('../utils/utils.js')

module.exports = {
    name: 'nerd',
    description: "random date and what happened on that date",
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        const data = await got(`http://numbersapi.com/random/`).text()
        return { text: data, reply: true }
    },
};