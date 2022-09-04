module.exports = {
    name: 'test', // name of the command
    aliases: ['xd'], // alias of the command
    description: 'test', // command description if you wanna in the future make a help command
    cooldown: 5000, // cooldown command 5000 ms = 5 seconds
    execute: async (msg, args, client, params) => { // variables that you can use in the command that you imported from main.js
        console.log("test")
        return { // return an object with the text property
            text: `test`
        }
    }
}