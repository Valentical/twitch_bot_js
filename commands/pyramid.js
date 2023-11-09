const config = require(`../config.json`)
const { sleep } = require("../utils/utils");


module.exports = {
    name: "pyramid",
    description: "wuh",
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        const usage = `usage: ${config.bot.prefix}pyramid 5 TriHard`
        const size = context.message.args[0]
        const emote = context.message.args.slice(1).join(' ').replace('!', 'ǃ').replace('=', '꓿').replace('$', '💲') + ' '


        if (context.message.args.length < 2) return { text: usage, reply: true }
        if (isNaN(size)) return { text: `size should be a number, ${usage}`, reply: true }
        if (size > 40) return { text: `the maximum size is 40`, reply: true }
        if (size < 2) return { text: `the minimum size is 2`, reply: true }

        for (let i = 1; i <= size; i++) {
            bot.Client.privmsg(context.channel.login, emote.repeat(i));
            await sleep(100)
        }

        for (let i = (size - 1); i > 0; i--) {
            bot.Client.privmsg(context.channel.login, emote.repeat(i));
            await sleep(100)
        }

    },
};