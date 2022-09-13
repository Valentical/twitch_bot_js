const { sleep } = require("../utils/utils");

module.exports = {
    name: "ximberto",
    description: "sends an emote",
    permission: 1,
    cooldown: 5000,
    aliases: [],
    prefix: '&',
    execute: async context => {
        try {
            await sleep(2000);
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