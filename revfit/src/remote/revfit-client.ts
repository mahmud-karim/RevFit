import axios from 'axios'

export const revfitUserClient = axios.create({
    baseURL: 'http://localhost:5555',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})