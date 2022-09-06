const handle = async (context) => {
    if (!context.message.content[0].startsWith(bot.Config.bot.prefix)) return;
    const command = bot.Commands.get(context.message.command)
    if (!command) return;
    try {
        const result = await command.execute(context); 
        if (!result) return;
        if (result.reply) result.text = `@${context.user.name}, ${result.text}`; 
        await bot.Client.say(context.channel.login, result.text.replace(/\n|\r/g, " ")); 

    } catch (err) {
        console.log(err) 

    } 
}

module.exports = handle;
