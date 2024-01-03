const { sleep } = require("../utils/utils");

module.exports = {
    name: "ximberto",
    description: "sends an emote",
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        try {
            return {
                text: `valent96Old`,
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