const got = require('got')

module.exports = {
    name: 'addcommand',
    description: "adds a command",
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        bot.db.cmd.create({ commandName: context.message.args[0], response: context.message.args.slice(1).join(" "), channel: context.channel.id }); 
        return { text: "added a command" , reply: false }
    },
};