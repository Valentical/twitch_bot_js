const config = require('../config.json')
const utils = require('./utils.js')
const cooldown = require('./cooldown.js')
// const { pool, redis } = require('../unfinished/connections.js')
const got = require('got');
const { sleep } = require("../utils/utils");

const handle = async (context) => {


    const commands = await bot.db.cmd.find({ commandName: context.message.content[0], channel: context.channel.id });

    for (const command of commands) {
        if (!command) return;

        if (!command.channel.includes(context.channel.id)) continue;

        const key = `${command.commandName} ${context.user.id} ${context.channel.id}`;
        if (cooldown.has(key)) return;

        cooldown.set(key, command.cooldown);

        await bot.Client.say(context.channel.login, command.response.replace(/\n|\r/g, " "));
    }

    const live = await got(`https://api.ivr.fi/v2/twitch/user?login=${context.channel.login}`).json()
    if (live[0].stream !== null && context.channel.login !== 'oshgay') return;

    const userState = bot.Client.userStateTracker.channelStates[context.channel.login];
    const highLimits = userState?.isMod || userState?.badges.hasVIP || userState?.badges.hasBroadcaster;
    if (context.user.id === config.owner.userID && !highLimits) await sleep(1000)

    let command



    command = bot.Commands.get(context.message.command);

    if (!command) return;

    const key = `${command.name} ${context.user.id} ${context.channel.id}`;
    if (cooldown.has(key)) return;


    cooldown.set(key, command.cooldown);
    try {
        const result = await command.execute(context);
        if (!result) return;
        if (result.reply) result.text = `@${context.user.name}, ${result.text}`;
        await bot.Client.say(context.channel.login, result.text.replace(/\n|\r/g, " "));

    } catch (err) {
        console.log(err)

    }
}

module.exports = handle
