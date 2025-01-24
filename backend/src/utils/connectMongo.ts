import mongoose, { Error as MongoError } from "mongoose"

function connectMongo(connectionString: string) {
    mongoose.connect(connectionString)

    mongoose.connection.on("connected", () => {
        console.log("mongo connected")
    })

    mongoose.connection.on("error", (error: MongoError) => {
        console.log("mongo failed to connect. ", error)
    })

    mongoose.connection.on("disconnected", () => {
        console.log("mongo disconnected.")
    })
}

export default connectMongo
