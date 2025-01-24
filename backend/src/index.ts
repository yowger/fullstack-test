import compression from "compression"
import cors from "cors"
import express from "express"
import morgan from "morgan"

import config from "./config/config"
import errorHandler from "./middleware/errorHandler"
import postRoute from "./routes/post.routes"
import connectMongo from "./utils/connectMongo"

connectMongo(config.DB_URI)

const app = express()

app.use(cors())
app.use(morgan("combined"))
app.use(express.json())
app.use(compression())

app.use("/post", postRoute)
app.use(errorHandler)
app.use("*", (req, res) => {
    res.status(404).json({ message: "Route not found" })
})

app.listen(config.PORT, () =>
    console.log(`Server running on port ${config.PORT}`)
)

process
    .on("unhandledRejection", (error, p) => {
        console.error(new Date().toUTCString() + "Unhandled Rejection", error)
    })
    .on("uncaughtException", (error) => {
        console.error(new Date().toUTCString() + " uncaughtException:", error)
    })
