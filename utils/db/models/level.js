const { Schema, model } = require("mongoose")

const levelSchema = new Schema(
    {
        level: {
            type: Number,
            default: 1,
        },
        username: {
            type: String,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        }

    }
);

const level = model("level", levelSchema);
module.exports = level