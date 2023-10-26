const got = require('got')
const { sleep } = require('../utils/utils.js')
const utils = require('../utils/utils.js')

module.exports = {
    name: 'funfact',
    description: 'Random fun fact',
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        const year = r(2017, new Date().getFullYear())
        const randomDate = new Date(r(1, 12), year)
        await sleep(2000)

        const data = await got(`https://uselessfacts.net/api/posts?d=${encodeURIComponent(randomDate.toJSON())}`).json()
        const fact = utils.randArray(data);
        return { text: fact.title, reply: true }
    },
};

function r(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}