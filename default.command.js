module.exports = {
    name: "NAME",
    description: "DESCRIPTION",
    permission: 100,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        try {
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