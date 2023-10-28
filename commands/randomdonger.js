const dongers = require("../data/donger.json");
const { sleep } = require("../utils/utils");
const utils = require("../utils/utils");

module.exports = {
    name: "randomdonger",
    description: "sends a random donger",
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        const donger = utils.randArray(dongers);
        return { text: donger, reply: false };
    },
};
