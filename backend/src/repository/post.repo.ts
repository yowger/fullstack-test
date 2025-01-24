import Post from "../models/post.model"

async function getPost(postId: string) {
    if (!postId) {
        throw new Error("Post ID is required")
    }

    const post = await Post.findById(postId)
    if (!post) {
        throw new Error("Post not found")
    }

    return post
}

async function getPostByList(query = {}, page = 1, limit = 10) {
    const skip = (page - 1) * limit

    const [posts, totalCount] = await Promise.all([
        Post.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit),
        Post.countDocuments(query),
    ])

    const totalPages = Math.ceil(totalCount / limit)

    return {
        posts,
        metadata: {
            page,
            limit,
            totalCount,
            totalPages,
        },
    }
}

export const postRepo = {
    getPost,
    getPostByList,
}
