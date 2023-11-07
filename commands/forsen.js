const { sleep } = require("../utils/utils");

module.exports = {
    name: "forsen",
    description: "sends a forsen emote",
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        try {
            return {
                text: `valent96Femsen`,
                reply: false,
            };
        } catch (err) {
            console.log(err)
            return {
                text: `error monkaS`,
            };
        }
    },
};