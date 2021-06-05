import axios from "axios"

const instance = axios.create({
    // baseURL: "http://localhost:3010/",
    baseURL: "https://smtp-nodejsserver.herokuapp.com/"
})

// api
export const API = {
    sendMessage(name, email, message, errorText) {
        return instance.post(`sendMessage`, {name, email, message, errorText});
    },
}
