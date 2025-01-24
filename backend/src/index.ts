import dotenv from "dotenv"
dotenv.config()
import express from "express"
import morgan from "morgan"

const app = express()

app.use(morgan("combined"))
app.use(express.json())

const PORT = 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

process
    .on("unhandledRejection", (error, p) => {
        console.error(new Date().toUTCString() + "Unhandled Rejection", error)
    })
    .on("uncaughtException", (error) => {
        console.error(new Date().toUTCString() + " uncaughtException:", error)
    })
