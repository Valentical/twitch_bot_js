const { sleep } = require("../utils/utils");

module.exports = {
    name: "test",
    description: "testeez",
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        try {
            return {
                text: `testeez`,
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