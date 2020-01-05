import axios from 'axios'

export const revfitUserClient = axios.create({
    baseURL: 'http://54.196.8.248:5555/',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})