const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["failed", "success", "upcoming"],
            required: true,
        },
        postCreated: {
            type: Date,
            default: Date.now,
        },
        articleLink: {
            type: String,
            required: false,
        },
        videoLink: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Post", PostSchema)
