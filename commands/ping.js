const got = require('got');
const { sleep } = require("../utils/utils");
const process = require('process');
const { performance } = require("perf_hooks");
const config = require("../config.json");


module.exports = {
    name: 'ping',
    description: 'shows server info',
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        const memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024;
        const seconds = process.uptime();
        const minutes = Math.floor(seconds % (60 * 60) / 60);
        const hours = Math.floor(seconds / (60 * 60));
        const buh1 = performance.now();
        await bot.Client.ping();
        const buh2 = performance.now()
        const latency = (buh2 - buh1).toFixed(0);
        const prefix = config.bot.prefix



        return { text: ` ${latency}ms; Uptime: ${hours.toFixed(0)} hours, ${minutes.toFixed(0)} minutes; Used memory: ${memoryUsage.toFixed(1)}MB; Prefix: ${prefix} ` }
    },
};