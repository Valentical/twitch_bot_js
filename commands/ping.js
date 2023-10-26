const got = require('got');
const { sleep } = require("../utils/utils");


module.exports = {
    name: 'ping',
    description: 'shows server info',
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        await sleep(2000);
        const memoryUsage = process.memoryUsage().heapUsed/1024/1024
        return { text: `Used memory: ${memoryUsage.toFixed(1)}MB`}
    },
};