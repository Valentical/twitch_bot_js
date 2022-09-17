const config = require('../config.json')
const got = require('got')
const humanize = require('humanize-duration')
const utils = this;

module.exports.humanize = (ms) => {
    const options = {
        language: "shortEn",
        languages: {
            shortEn: {
                y: () => "y",
                mo: () => "mo",
                w: () => "w",
                d: () => "d",
                h: () => "h",
                m: () => "m",
                s: () => "s",
                ms: () => "ms",
            },
        },
        units: ["y", "d", "h", "m", "s"],
        largest: 3,
        round: true,
        conjunction: " and ",
        spacer: "",

    }
    return humanize(ms, options);
};

module.exports.randArray = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

module.exports.sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
};


