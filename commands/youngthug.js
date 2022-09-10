const { sleep } = require("../utils/utils");

module.exports = {
    name: "YoungThugJumpingOutOfASkyscraperOnAQuadbikeIntoGunnasHelicopterThenGunnaBlowsUpTheSkyscraper",
    description: "sends an emote with really long name",
    permission: 100,
    cooldown: 10000,
    aliases: [],
    execute: async context => {
        try {
            await sleep(1500);
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