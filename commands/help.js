const { sleep } = require("../utils/utils");

module.exports = {
    name: "help",
    description: "sends a list of every command",
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async (msg, context) => {
        let text = `command list: 8ball, boobatv, bored, cat, chatters, dadjoke, dog, forsen, funfact, hstar, joke, js, nerd, ping, randomdonger, sciencejoke, stalk, test, getuserid, ximberto`
        return { text, reply: false }
    },
};