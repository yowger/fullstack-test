import dotenv from "dotenv"
dotenv.config()

const config = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV,
    DB_URI: process.env.DB_URI,
}

export default config
