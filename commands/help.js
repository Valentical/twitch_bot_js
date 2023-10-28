const { sleep } = require("../utils/utils");

module.exports = {
    name: "help",
    description: "sends a list of every command",
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async (msg, context) => {
        let text = `command list: 8ball, bored, cat, chatters, dadjoke, dog, forsen, funfact, joke, nerd, randomdonger, sciencejoke, test, ximberto, stalk`
        return { text, reply: false }
    },
};