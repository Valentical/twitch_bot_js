const { sleep } = require("../utils/utils");

module.exports = {
    name: "forsen",
    description: "sends a forsen emote",
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        try {
            await sleep(2000);
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