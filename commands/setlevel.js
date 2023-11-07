const got = require('got')
const config = require("../config.json")


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
    name: "setlevel",
    description: "changes the level of a user, setevel <user> <level>",
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        if (context.user.id !== config.owner.userID) return;
        const user = context.message.args[0].toLowerCase();
        const level = context.message.args.slice(1).join(" ");

        const nameToId = await got(`https://api.ivr.fi/v2/twitch/user?login=${user}`).json();

        const id = nameToId[0].id
        const database = await bot.db.level.findOne({ id: id })

        if (!database) {
            const newUser = bot.db.level.create({
                id: id,
                username: user,
                level: level,
            })
        }
        else {
            await bot.db.level.updateOne({ id: id }, { $set: { level: level } })
        }

        return { text: `set level for ${user}: ${level} (${levelRoles(level)})`, reply: false };
    },
};
