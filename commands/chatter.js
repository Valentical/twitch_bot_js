const got = require('got');

module.exports = {
    name: 'chatters',
    description: 'Chatter count info',
    aliases: [],
    execute: async context => {
        const user = context.channel.login
        const c = await got(`http://tmi.twitch.tv/group/user/${user}/chatters`).json()
        return { text: `There is ${c.chatter_count} chatters`}
    },
};