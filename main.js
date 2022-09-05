const { handleReconnectMessage } = require("@kararty/dank-twitch-irc");
const { client } = require(`./utils/client.js`); 

global.bot = {};
bot.Config = require("./config.json");
bot.Commands = require("./utils/commands.js");
bot.Client = client;

client.on("PRIVMSG", (msg) => {
  const invisChar = invisChar = new RegExp(/[\u034f\u2800\u{E0000}\u180e\ufeff\u2000-\u200d\u206D]/gu);
  const message = msg.messageText.replace(invisChar, "").trimEnd();
  const content = message.split(/\s+/g);
  const commandName = content[0].slice(bot.Config.bot.prefix.length).toLowerCase();
  const args = content.slice(1);
  const context = {
        user: {
            id: msg.senderUserID,
            name: msg.displayName,
            login: msg.senderUsername,
            colorRaw: msg.colorRaw,
            badgesRaw: msg.badgesRaw,
            badges: msg.badges,
            color: msg.color,
        },
        channel: {
            id: msg.channelID,
            login: msg.channelName,
        },
        message: {
            id: msg.messageID,
            raw: msg.rawSource,
            content: content,
            command: commandName,
            text: message,
            time: Date.parse(msg.serverTimestamp),
            args,
            params,
        },
        isAction: msg.isAction,
        timestamp: msg.serverTimestampRaw,
        emotes: msg.emotes,
        tags: msg.ircTags,
    };
    handle(context) 
});

client.joinAll(["valenticall", "markzynk", "kattah"]);
