const { ChatClient, AlternateMessageModifier, SlowModeRateLimiter } = require("@kararty/dank-twitch-irc");
require("dotenv").config();

const client = new ChatClient({
    username: process.env.USERNAME,
    password: process.env.TWITCH_OAUTH_TOKEN,
    rateLimits: 'default', // set this to verifiedBot if you have a verified bot account
    ignoreUnhandledPromiseRejections: true // this will ignore join/part errors
});

client.use(new AlternateMessageModifier(client)); // allow your bot to send the same message within a 30 seconds period.
client.use(new SlowModeRateLimiter(client, 2)); // will rate limit your messages in channels where your bot is not moderator, VIP or broadcaster and has to wait a bit between sending messages. Default is 10
client.connect()

module.exports = { client };