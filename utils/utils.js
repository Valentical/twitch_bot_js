const config = require('../config.json')
const got = require('got')
const humanize = require('humanize-duration')
const utils = this;

const shortHumanize = humanize.humanizer({
    language: 'shortEn',
    languages: {
        shortEn: {
            y: () => 'y',
            mo: () => 'mo',
            w: () => 'w',
            d: () => 'd',
            h: () => 'h',
            m: () => 'm',
            s: () => 's',
            ms: () => 'ms',
        },
    },
});

module.exports.formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

module.exports.humanize = (date, converted) => {
    let ms = date
    if (!converted) ms = Date.now() - Date.parse(date);
    const options = {
        units: ['y', 'mo', 'd', 'h', 'm', 's'],
        largest: 3,
        round: true,
        delimiter: ' ',
        spacer: '',
    };
    return shortHumanize(ms, options);
};

module.exports.randArray = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

module.exports.sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
};


