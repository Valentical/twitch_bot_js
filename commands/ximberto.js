module.exports = {
    name: "ximberto",
    description: "sends an emote",
    permission: 100,
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