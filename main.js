require("dotenv").config();
const { readdirSync } = require('fs');
const { client } = require('./util/client.js');

const commands = new Map();
const aliases = new Map();
const cooldown = new Map();

for (let file of readdirSync(`./commands/`).filter((file) => file.endsWith('.js'))) {
    let pull = require(`./commands/${file}`);
    commands.set(pull.name, pull);
    if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach((alias) => aliases.set(alias, pull.name));
}
// this for loop above will execute all commands in the commands folder that is file that ends with JS and its aliases

client.on('ready', async () => {
    console.log(`Connected to Twitch`);
    // when the bot connection to Twitch is successful
})

client.on('close', async (err) => {
    if (err != null) {
        console.error('Client closed due to error', err);
    }
    process.exit(1);
    // when the bot connection to Twitch is closed
})

client.on('JOIN', async ({ channelName }) => {
    console.log(`Joined channel ${channelName}`);
    // when the bot joins a channel
});

client.on('PART', async ({ channelName }) => {
    console.log(`Left channel ${channelName}`);
    // when the bot leaves a channel
})

client.on("PRIVMSG", async (msg) => {
    // Called on incoming messages whose command is PRIVMSG.
    const prefix = '?';
    if (!msg.messageText.startsWith(prefix)) return; // if the message doesn't start with the prefix return
    const args = msg.messageText.slice(prefix.length).trim().split(/ +/g); // args[0] to define the first word after the prefix and args[1] and so on.
    const params = {}; // params is an object that you can use in the command
    args.filter(word => word.includes(':')).forEach(param => {
        const key = param.split(':')[0];
        const value = param.split(':')[1];
        params[key] = value === 'true' || value === 'false' ? value === 'true' : value;
    });
    const cmd = args.length > 0 ? args.shift().toLowerCase() : '';
    // if the command is not in the commands folder return
    if (cmd.length == 0) return;

    let command = commands.get(cmd);
    if (!command) command = commands.get(aliases.get(cmd));

    try {
        if (command) {
            if (command.cooldown) { // cooldown for the user that uses the command
                if (cooldown.has(`${command.name}${msg.senderUserID}`)) return;
                    cooldown.set(`${command.name}${msg.senderUserID}`, Date.now() + command.cooldown);
                    setTimeout(() => {
                        cooldown.delete(`${command.name}${msg.senderUserID}`);
                    }, command.cooldown);
            }
            const response = await command.execute(msg, args, client, params);
            // if the command returns an object with the text property send the message to the channel

            if (response) {
                if (response.error) { // if the command returns an object with the error property send the error message to the channel
                    setTimeout(() => {
                        cooldown.delete(`${command.name}${msg.senderUserID}`);
                    }, 2000);
                }
                client.say(msg.channelName, `${response.text}`); // return the response text
            }
        }
    } catch (err) {
        console.log(err);
        client.say(msg.channelName, `An error occurred while executing the command`);
    }
});

client.joinAll(["valenticall", "markzynk", "kattah"]); // soon we will use a database.

module.exports = { client }; // Export the client

// let globalCommandCooldown = 5000,




// client.on("ready", () => {
  //   console.log("Successfully connected to chat");
  // })

//
// if (messageText.startsWith("?")) {
//   return;
// }
// command = command.slice(1).toLocaleLowerCase();
// if (command === "DinkDonk") {
//   const msg1 = `DinkDonk ${target}`;
//   fullMessage = [msg1];
//   client.say(fullMessage);
// }
