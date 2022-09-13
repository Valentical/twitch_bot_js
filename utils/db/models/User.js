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
        }
    },
    {
        timestamps: true
    }
);

const User = model("User", userSchema);
module.exports = User

