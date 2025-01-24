import { Request, Response } from "express"

import { postRepo } from "../repository/post.repo"

async function createPostHandler(req: Request, res: Response) {
    const { title, status, articleLink, videoLink } = req.body

    const newPost = await postRepo.createPost({
        title,
        status,
        articleLink,
        videoLink,
    })

    res.status(201).json(newPost)
}

async function getPostHandler(req: Request, res: Response) {
    const { id } = req.params

    const post = await postRepo.getPost(id)
    // if (!post) {
    //     return res.status(404).json({ error: "Post not found" })
    // }

    res.status(200).json(post)
}

async function getPostsByListHandler(req: Request, res: Response) {
    const { page = 1, limit = 10, ...filters } = req.query
    console.log("🚀 ~ getPostsByListHandler ~ filters:", filters)

    const { posts, metadata } = await postRepo.getPostByList(
        filters,
        Number(page),
        Number(limit)
    )
    console.log("🚀 ~ getPostsByListHandler ~ posts:", posts)
    console.log("🚀 ~ getPostsByListHandler ~ metadata:", metadata)

    res.status(200).json({
        data: posts,
        metadata,
    })
}

export const postHandlers = {
    createPostHandler,
    getPostHandler,
    getPostsByListHandler,
}
