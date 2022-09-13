const config = require("../../../config.json")
const mongoose = require('mongoose')


mongoose.connect(bot.Config.db.MONGODB_URI);
module.exports = mongoose.connect;

