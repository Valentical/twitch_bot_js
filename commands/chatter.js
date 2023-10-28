const got = require('got');
const { sleep } = require("../utils/utils");


module.exports = {
    name: 'chatters',
    description: 'Chatter count info',
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        const user = context.channel.login
        const c = await got(`https://api.markzynk.com/twitch/chatters/${user}`).json()
        return { text: `There are ${c.chatters.count} chatters`}
    },
};