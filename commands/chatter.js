const got = require('got');

module.exports = {
    name: 'chatters',
    description: 'Chatter count info',
    aliases: [],
    async execute(client, msg, utils) {
        channel.log(msg)
        const c = await got(`http://tmi.twitch.tv/group/user/${user}/chatters`).json()
        return { text: `there is ${c.chatter_count} chatters in chat`}
    },
};