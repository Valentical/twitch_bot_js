const got = require('got');
const config = require('../config.json')


module.exports = {
    name: 'js',
    description: 'executes a javascript code',
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        const userInfo = await bot.db.level.findOne({ id: context.user.id })
        if (!userInfo || userInfo.level < 3) return
        function ev(code) {
            return eval(code);
        }
        cuh = context.message.content.toString().replace('&js,', "")
        wuh = ev(cuh)


        return { text: String(wuh) }
    },
};