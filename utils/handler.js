const config = require('../config.json')
const utils = require('./utils.js')
const cooldown = require('./cooldown.js')
// const { pool, redis } = require('../unfinished/connections.js')
const got = require('got');
const { sleep } = require("../utils/utils");
const channelsWithoutCommands = require("../data/channelsWithoutCommands.json");
const banphrases = require("../data/banphrases.json");

const helix = got.extend({
    prefixUrl: 'https://api.twitch.tv/helix',
    responseType: 'json',
    throwHttpErrors: false,
    headers: {
        'Authorization': config.twitchAuth,
        'Client-Id': config.twitchClientID
    }
})

const handle = async (context) => {

    if (channelsWithoutCommands.includes(context.channel.login)) return;

    /*  const options = {
          method: 'POST',
          headers: {
              Authorization: `${config.helix.twitchAuth}`,
              'Client-Id': `${config.helix.twitchClientID}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              data: {
                  user_id: `${context.user.id}`,
                  duration: 1,
                  reason: 'testing'
              }
          })
      };
      if (banphrases.includes(context.message.text)) {
          timeout = await got(`https://api.twitch.tv/helix/moderation/bans?broadcaster_id=${context.channel.id}&moderator_id=${config.bot.userID}`, options);
      } */

    const commands = await bot.db.cmd.find({ commandName: context.message.content[0], channel: context.channel.id });

    for (const command2 of commands) {
        if (!command2) return;
        if (context.user.id === config.bot.userID && command2) return;

        if (!command2.channel.includes(context.channel.id)) continue;

        const key = `${command2.commandName} ${context.user.id} ${context.channel.id} ${context.channel.login}`;
        if (cooldown.has(key) || cooldown.has(context.channel.login)) return;


        cooldown.set(key, command2.cooldown);
        cooldown.set(context.channel.login, command2.cooldown)

        await bot.Client.say(context.channel.login, command2.response.replace(/\n|\r/g, " "));
    }

    if (!context.message.content[0].startsWith(bot.Config.bot.prefix)) return;

    const live = await got(`https://api.ivr.fi/v2/twitch/user?login=${context.channel.login}`).json()
    if (live[0].stream !== null && context.channel.login !== 'oshgay') return;

    const userState = bot.Client.userStateTracker.channelStates[context.channel.login];
    const highLimits = userState?.isMod || userState?.badges.hasVIP || userState?.badges.hasBroadcaster;
    if (context.user.id === config.owner.userID && !highLimits) await sleep(1000)

    const command = bot.Commands.get(context.message.command)

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

