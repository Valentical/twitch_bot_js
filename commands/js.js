const got = require('got');
const { sleep } = require("../utils/utils");
const config = require ('../config.json')


module.exports = {
    name: 'js',
    description: 'executes a javascript code',
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        await sleep(2000)
        if (context.user.id !== config.owner.userID) return
        function ev(code)
        {
            return eval(code);
        }
        cuh = context.message.content.toString().replace('&js,', "")
        wuh = ev(cuh)

        
        return { text: String(wuh) }
    },
};