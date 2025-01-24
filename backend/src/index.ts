
import express from "express"
import morgan from "morgan"

import config from "./config/config"
import postRoute from "./routes/post.routes"
import connectMongo from "./utils/connectMongo"
console.log("🚀 ~ config:", config)

connectMongo(config.DB_URI)

const app = express()

app.use(morgan("combined"))
app.use(express.json())

app.use("/post", postRoute)

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
