import express from "express"

import { getPostHandler } from "../controllers/post.controller"

const router = express.Router()

router.get("/", getPostHandler)

export default router
