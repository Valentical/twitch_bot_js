

module.exports = {
    name: "help",
    description: "sends a list of every command",
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async (msg, context) => {
        const commands = [];
        bot.Commands.Commands.forEach((command) => commands.push(command.name))



        return {
            text: `command list: ${commands.join(', ')}`, reply: false
        }
    },
};