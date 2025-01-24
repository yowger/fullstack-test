import { Request, Response } from "express"

export const getPostHandler = async (req: Request, res: Response) => {
    res.status(201).json("post")
}

export const getPostsByListHandler = async (req: Request, res: Response) => {
    res.status(201).json("post")
}

export const postHandlers = {
    getPostHandler,
    getPostsByListHandler,
}
