

module.exports = {
    name: 'namechange',
    description: 'returns old usernames for that user',
    cooldown: 5000,
    aliases: ["nc"],
    execute: async context => {
        let user = context.message.args[0]?.toLowerCase() ?? context.user.login
        const userInfo = await bot.db.User.findOne({ username: user })

        if (!userInfo) {
            return {
                text: `I've never seen that user`,
                reply: false,
            };
        }
        if (!userInfo.previousUsername?.length) {
            return {
                text: `Current Username: ${userInfo.username} | No previous usernames`,
                reply: false,
            };
        }
        if (userInfo) {
            return {
                text: `Current Username: ${userInfo.username} | Old Usernames: ${userInfo.previousUsername.join(", ")}`,
                reply: false,
            };
        }
    },
};