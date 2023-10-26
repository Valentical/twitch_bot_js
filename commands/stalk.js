const { sleep } = require('../utils/utils.js')
const utils = require('../utils/utils.js')

module.exports = {
    name: 'stalk',
    description: 'Last seen chat message of an user',
    permission: 1,
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        await sleep(1500)
        const user = context.message.args[0].toLowerCase().replace('@', '')
        if (!user) return { text: `No user provided`, reply: false }
        const data = await bot.db.User.findOne({ username: user })
        if (!data) return { text: `I've never seen that user`, reply: true }
        return { text: `That user was last seen in chat ${utils.humanize(Date.now() - data.timestamp)} ago, #${data.channel} their last message: ${data.lastMessage}` }
    }
};