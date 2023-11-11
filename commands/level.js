function levelRoles(num) {
    if (num == 0) return "Blacklisted"
    if (num == 1) return "User"
    if (num == 2) return "Moderator"
    if (num == 3) return "Dev"
    if (num == 4) return "Admin"
    if (num == 5) return "Owner"
    return "N/A"
}

module.exports = {
    name: 'level',
    description: 'tells you the level of that user',
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        let user = context.message.args[0]?.toLowerCase() ?? context.user.login

        const userInfo = await bot.db.level.findOne({ username: user })

        if (!userInfo) {
            return {
                text: `level for ${user}: 1 (User)`,
                reply: false,
            };
        } else {
            return {
                text: `level for ${user}: ${userInfo.level} (${levelRoles(userInfo.level)})`,
                reply: false,
            };
        }
    }
};