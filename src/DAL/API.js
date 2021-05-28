import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:3010/",
    withCredentials: true
})

// api
export const API = {
    sendMessage(name, email, message) {
        return instance.post(`sendMessage`, {name, email, message})
    },
}

