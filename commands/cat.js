const got = require('got')
const { sleep } = require('../utils/utils.js')

module.exports = {
    name: 'cat',
    description: "Sends a random picture of a cat",
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        const cat = await got('https://api.thecatapi.com/v1/images/search').json()
        return { text: `${cat[0].url}`, reply: false }
    },
};