const { sleep } = require("../utils/utils");

module.exports = {
    name: "YoungThugJumpingOutOfASkyscraperOnAQuadbikeIntoGunnasHelicopterThenGunnaBlowsUpTheSkyscraper",
    description: "sends an emote with really long name",
    permission: 1,
    cooldown: 10000,
    aliases: [],
    execute: async context => {
        try {
            return {
                text: `YoungThugJumpingOutOfASkyscraperOnAQuadbikeIntoGunnasHelicopterThenGunnaBlowsUpTheSkyscraper`,
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