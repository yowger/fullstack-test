import Axios from "axios"

const API_URL = import.meta.env.VITE_SERVER_URL

export const axiosPublic = Axios.create({
    baseURL: API_URL,
    headers: { "Content-Type": "application/json", Accept: "application/json" },
})
