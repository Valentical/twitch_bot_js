const config = require(`../config.json`)
const { sleep } = require("../utils/utils");


module.exports = {
    name: "spam",
    description: "spams",
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        const userInfo = await bot.db.level.findOne({ id: context.user.id })
        if (!userInfo || userInfo.level < 4) return { text: `you dont have permission to use this command`, reply: true }
        const usage = `usage: ${config.bot.prefix}pyramid 5 TriHard`
        const size = context.message.args[0]
        const emote = context.message.args.slice(1)


        if (context.message.args.length < 2) return { text: usage, reply: true }
        if (isNaN(size)) return { text: `size should be a number, ${usage}`, reply: true }
        if (size > 100) return { text: `the maximum size is 40`, reply: true }
        if (size < 2) return { text: `the minimum size is 2`, reply: true }

        for (let i = 1; i <= size; i++) {
            bot.Client.privmsg(context.channel.login, emote);
        }

    },
};