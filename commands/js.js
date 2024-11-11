module.exports = {
    name: "eval",
    cooldown: 0,
    aliases: ["js"],
    description: "Evaluates JavaScript code directly in the bot, requires level 3",
    execute: async context => {
        try {
            const userInfo = await bot.db.level.findOne({ id: context.user.id })
            if (!userInfo || userInfo.level < 5) return

            let ev;
            if (context.message.args[0].startsWith('http')) {
                const res = await got(context.message.args[0]);
                ev = await eval('(async () => {' + res.body.replace(/„|“/gm, '"') + '})()');
            } else {
                ev = await eval('(async () => {' + context.message.args.join(' ').replace(/„|“/gm, '"') + '})()');
            }

            if (!ev) return null;
            return { text: String(ev), reply: false };

        } catch (err) {
            return { text: err.message, reply: true };
        }
    },
};
