const { sleep } = require("../utils/utils");

module.exports = {
    name: "hstar",
    description: "times out hstar",
    permission: 100,
    cooldown: 5000,
    aliases: [],
    prefix: '&',
    execute: async context => {
        try {
            await sleep(2000);
            return {
                text: `timeout HStar2005 69420 4Kid`,
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