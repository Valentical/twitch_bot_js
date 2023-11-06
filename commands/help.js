

module.exports = {
    name: "help",
    description: "sends a list of every command",
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async (msg, context) => {
        const commands = [];
        bot.Commands.Commands.forEach((command) => commands.push(command.name))

        const invisChar = new RegExp(/[\u034f\u2800\u{E0000}\u180e\ufeff\u2000-\u200d\u206D]/gu);
        console.log(invisChar)
        return {
            text: `command list: ${commands.join(', ')}`, reply: false
        }
    },
};