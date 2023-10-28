const { sleep } = require("../utils/utils");
const utils = require('../utils/utils.js');

const answers = ["as I see it, yes.", "ask again later.", "better not tell you now.", "cannot predict now.", "concentrate and ask again.",
"don’t count on it.", "it is certain.", "it is decidedly so.", "most likely.", "my reply is no.", "my sources say no.",
"outlook not so good.", "outlook good.", "reply hazy, try again.", "signs point to yes.", "very doubtful.", "without a doubt.",
"yes.", "yes – definitely.", "you may rely on it."]

module.exports = {
    name: "8ball",
    description: "random 8ball fortune",
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
    return { text: utils.randArray(answers), reply: true }
},
};