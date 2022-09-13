const { sleep } = require("../utils/utils");

module.exports = {
    name: "NAME",
    description: "DESCRIPTION",
    permission: 1,
    cooldown: 5000,
    aliases: [],
    prefix: '&',
    execute: async context => {
        try {
            await sleep(ms);
            return {
                text: ``,
                reply: true,
            };
        } catch (err) {
            console.log(err)
            return {
                text: `error monkaS`,
            };
        }
    },
};