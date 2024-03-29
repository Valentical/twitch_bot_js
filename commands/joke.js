const got = require('got');
const { sleep } = require('../utils/utils.js')
const utils = require('../utils/utils.js')

const data1 = require("../data/momjokes.json").data
const data2 = require('../data/science_jokes.json').data

module.exports = {
    name: 'joke',
    description: 'random joke',
    cooldown: 5000,
    aliases: [],
    execute: async context => {
        const jokeAPI = {
            dadjoke: async () => {
                const { joke } = await got("https://icanhazdadjoke.com/").json()
                return { text: joke, reply: false }
            },
            momjoke: async () => {
                const momjoke = utils.randArray(data1);
                return { text: `${momjoke}`, reply: false }
            },
            sciencejoke: async () => {
                const sciencejoke = utils.randArray(data2);
                return { text: sciencejoke, reply: false }
            },
        }
        const joke1 = Object.keys(jokeAPI)

        switch (this.name) {
            case "dadjoke":
                return await jokeAPI['dadjoke']()

            case "momjoke":
                return await jokeAPI['momjoke']()

            case "sciencejoke":
                return await jokeAPI['sciencejoke']()

            default:
                const api = jokeAPI[utils.randArray(joke1)]
                return await api()

        }
    }
}