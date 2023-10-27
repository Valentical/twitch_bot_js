const got = require('got');
const { sleep } = require("../utils/utils");
const process = require('process');


module.exports = {
    name: 'ping',
    description: 'shows server info',
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        await sleep(2000);
        const memoryUsage = process.memoryUsage().heapUsed/1024/1024;
        const seconds = process.uptime();
        const minutes = Math.floor(seconds % (60*60) / 60);
        const hours = Math.floor(seconds / (60*60));
        return { text: `Used memory: ${memoryUsage.toFixed(1)}MB; Uptime: ${hours.toFixed(0)} hours, ${minutes.toFixed(0)} minutes; `}
    },
};