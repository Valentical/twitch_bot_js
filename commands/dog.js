const got = require('got')
const { sleep } = require('../utils/utils.js')

module.exports = {
    name: 'dog',
    description: "Sends a random picture of a dog",
    permission: 1,
    cooldown: 5000,
    aliases: [],
    prefix: '&',
    execute: async context => {
        await sleep(2000)
        const data = await got(`https://dog.ceo/api/breeds/image/random`).json()
        return { text: data.message, reply: false }
    },
};
