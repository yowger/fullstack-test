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
    res.status(201).json("post")
}

async function getPostsByListHandler(req: Request, res: Response) {
    res.status(201).json("post")
}

export const postHandlers = {
    createPostHandler,
    getPostHandler,
    getPostsByListHandler,
}
