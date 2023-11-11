const { Schema, model } = require("mongoose")

const usernameSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        },
        previousUsername: {
            type: Array,
        }
    },
);

const username = model("username", usernameSchema);
module.exports = username