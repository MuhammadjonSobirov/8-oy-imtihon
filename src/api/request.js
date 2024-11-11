import axios from "axios";
const BASEURL = "https://670fdc12a85f4164ef2c3ac4.mockapi.io/films";

export const request = axios.create({
    baseURL: BASEURL,
    headers: {
        "Content-Type": "application/json"
    }
})