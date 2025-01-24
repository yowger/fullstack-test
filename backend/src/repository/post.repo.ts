import Post from "../models/post.model"

async function createPost(data: {
    title: string
    status: "failed" | "success" | "upcoming"
    articleLink?: string
    videoLink?: string
}) {
    const post = new Post(data)
    await post.save()

    return post
}

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

interface PostQuery {
    // status?: string
    title?: string
    // startDate?: string
    // endDate?: string
    // articleLink?: string
    // videoLink?: string
}

async function getPostByList(query: PostQuery = {}, page = 1, limit = 10) {
    const skip = (page - 1) * limit

    const filters: any = {}

    if (query.title) {
        filters.title = { $regex: query.title, $options: "i" }
    }

    const [posts, totalCount] = await Promise.all([
        Post.find(filters).sort({ createdAt: -1 }).skip(skip).limit(limit),
        Post.countDocuments(filters),
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
    createPost,
    getPost,
    getPostByList,
}
