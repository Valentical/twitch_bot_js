const { ChatClient, AlternateMessageModifier, SlowModeRateLimiter } = require("@kararty/dank-twitch-irc");

const client = new ChatClient({
    username: bot.Config.bot.login,
    password: bot.Config.bot.oauth,
    rateLimits: 'default', 
    ignoreUnhandledPromiseRejections: true 
});

client.use(new AlternateMessageModifier(client)); 
client.use(new SlowModeRateLimiter(client, 2)); 
client.connect()

module.exports = { client };