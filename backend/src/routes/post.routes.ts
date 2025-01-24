import express from "express"

import { postHandlers } from "../controllers/post.controller"
import asyncHandler from "../utils/asyncHandler"

const router = express.Router()

router.post("/", asyncHandler(postHandlers.createPostHandler))
router.get("/:id", asyncHandler(postHandlers.getPostHandler))
router.get("/", asyncHandler(postHandlers.getPostsByListHandler))

export default router
