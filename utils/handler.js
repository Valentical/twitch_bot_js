const config = require('../config.json')
const utils = require('./utils.js')
const cooldown = require('./cooldown.js')
// const { pool, redis } = require('../unfinished/connections.js')
const got = require('got');

const handle = async (context) => {
    var nonPrefixCommand = false;
    if(!context.message.content[0].startsWith(bot.Config.bot.prefix)) {
        if(context.message.content[0] === `YoungThugJumpingOutOfASkyscraperOnAQuadbikeIntoGunnasHelicopterThenGunnaBlowsUpTheSkyscraper`)
            nonPrefixCommand = true;
            else return;
    }
    const live = await got(`https://api.ivr.fi/v2/twitch/user?login=${context.channel.login}`).json()
    if (live[0].stream !== null) return

    let command

    if (nonPrefixCommand) {
    command = bot.Commands.get(context.message.content[0]);
    }
     else {
        command = bot.Commands.get(context.message.command)};
        
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
