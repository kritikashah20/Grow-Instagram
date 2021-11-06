import axios from "axios";

// time-outs
const timeouts = {
    ONE_MIN: 60000,
    THIRTY_SEC: 30000
}

// server configuration
// const apiVersion = "v0"
const serverBaseURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tanishqvyas069"


// axios configuration
const axiosInstance = axios.create({
    baseURL: serverBaseURL,
    headers: {}
})


// methods
export const GET = (url, headers) => {
    return axiosInstance({
        method: "get",
        url: url,
        headers: headers || {},
        timeout: timeouts.THIRTY_SEC
    })
}

export const POST = (url, body, headers) => {
    return axiosInstance({
        method: "post",
        url: url,
        body: body || {},
        headers: headers || {},
        timeout: timeouts.THIRTY_SEC
    })
}

export const DELETE = (url, body, headers) => {
    return axiosInstance({
        method: "delete",
        url: url,
        body: body || {},
        headers: headers || {},
        timeout: timeouts.ONE_MIN
    })
}

export const PUT = (url, body, headers) => {
    return axiosInstance({
        method: "put",
        url: url,
        body: body || {},
        headers: headers || {},
        timeout: timeouts.THIRTY_SEC
    })
}

export const PATCH = (url, body, headers) => {
    return axiosInstance({
        method: "patch",
        url: url,
        body: body || {},
        headers: headers || {},
        timeout: timeouts.THIRTY_SEC
    })
}