import express from "express"

import { postHandlers } from "../controllers/post.controller"

const router = express.Router()

router.post("/", postHandlers.createPostHandler)
router.get("/:id", postHandlers.getPostHandler)
router.get("/", postHandlers.getPostsByListHandler)

export default router
