const { Schema, model } = require("mongoose")

const nonPrefixCommand = new Schema(
    {
        commandName: {
            type: String,
            required: true,
        },
        permission: {
            type: Number,
            default: 1,
        },
        channel: {
            type: String,
            required: true,
        },
        cooldown: {
            type: Number,
            default: 3000,
        },
        response: {
            type: String,
            required: true,
        }

    }
);

const nonprefix_command = model("nonprefix_command", nonPrefixCommand );
module.exports = nonprefix_command