const { sleep } = require('../utils/utils.js')
const config = require("../config.json")
const { exec } = require("child_process");

module.exports = {
    name: 'restart',
    description: "restarts the bot",
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        if (context.user.id !== config.owner.userID) return;
        bot.Client.privmsg(context.channel.login, 'restarting...')
        exec('cd /root/twitch_bot_js && pm2 restart main.js')
        await sleep(1000)
        return { text: 'restarted elisSmile', reply: false }
    },
};
