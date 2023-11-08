/* const got = require('got');
const { sleep } = require('../utils/utils.js')
const { nanoid } = require('nanoid');
const utils = require('../utils/utils.js');

module.exports = {
    name: 'boobatv',
    description: 'huge booba and ass lvl 6 gyat',
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        const boobas = await got('https://api.booba.tv/').json()
        if (!boobas?.length) return { text: "no channels available at the moment", reply: true }

        const booba = utils.randArray(boobas)
        const userTag = `@${booba.user_display_name.toLowerCase() === booba.user_login ? booba.user_display_name : booba.user_login}`

        return { text: `${userTag} • ${booba.stream_viewer_count} viewers https://static-cdn.jtvnw.net/previews-ttv/live_user_${booba.user_login}.jpg?${nanoid(4)} • channel: https://www.twitch.tv/${booba.user_login} `, reply: true }
    },
};
*/