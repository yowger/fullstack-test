import mongoose from "mongoose"

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
export default mongoose.model("Post", PostSchema)
