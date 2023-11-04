const got = require('got');
const { sleep } = require("../utils/utils");
const config = require ('../config.json')


module.exports = {
    name: 'wuh',
    description: 'Chatter count info',
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        if (context.user.id !== config.owner.userID) return
        const user = context.channel.login
        const c = await got(`https://api.markzynk.com/twitch/chatters/${user}`).json()
        function getRandomInt(min, max) {
            min = Math.ceil(0);
            max = Math.floor(50);
            return Math.floor(Math.random() * (max - min) +min);
        }
        console.log(getRandomInt())
        viewer = getRandomInt()
        viewer2 = viewer + 5
        
        console.log(viewer)
        console.log(viewer2)
        return { text: `${c.chatters.viewers.slice(viewer)}`}
    },
};