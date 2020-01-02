import axios from 'axios'

export const UserClient = axios.create({
    baseURL: 'http://ip:port', 
    headers:{
        'Content-Type':'application/json'
    },
    withCredentials:true
})