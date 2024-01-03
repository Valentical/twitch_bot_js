const { Schema, model } = require("mongoose")

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        lastMessage: {
            type: String,
            required: true,
        },
        id: {
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
        timestamp: {
            type: Number,
            required: true,
        },
        previousUsername: {
            type: Array,
        }
    },
    {
        timestamps: true,
        strict: false
    }
);

const User = model("User", userSchema);
module.exports = User

