const data = require('../data/science_jokes.json').data
const utils = require('../utils/utils.js')

module.exports = {
    name: "sciencejoke",
    description: "sends a random science joke",
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        await utils.sleep(2000)
        const joke = utils.randArray(data);
        return { text: joke }
    },
};