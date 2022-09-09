const got = require('got');
const { sleep } = require("../utils/utils");


module.exports = {
    name: 'chatters',
    description: 'Chatter count info',
    permission: 100,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        await sleep(2000);
        const user = context.channel.login
        const c = await got(`http://tmi.twitch.tv/group/user/${user}/chatters`).json()
        return { text: `There are ${c.chatter_count} chatters`}
    },
};