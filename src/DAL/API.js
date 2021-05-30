import axios from "axios"

const instance = axios.create({
    // baseURL: "http://localhost:3010/",
    baseURL: "https://smtp-nodejsserver.herokuapp.com/",
    withCredentials: true
})

// api
export const API = {
    sendMessage(...payload) {
        return instance.post(`sendMessage`, {...payload})
    },
}
