const got = require('got')
const config = require(`../config.json`)

module.exports = {
    name: 'addcommand',
    description: "adds a command",
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        const userInfo = await bot.db.level.findOne({ id: context.user.id })
        if (!userInfo || userInfo.level < 5) return
        bot.db.cmd.create({
            commandName: context.message.args[0],
            response: context.message.args.slice(1).join(" "),
            channel: context.channel.id
        });
        return { text: "added a command", reply: false }
    },
};
