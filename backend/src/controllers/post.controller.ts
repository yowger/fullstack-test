import { Request, Response } from "express"

export const getPostHandler = async (req: Request, res: Response) => {
    res.status(201).json("post")
}
