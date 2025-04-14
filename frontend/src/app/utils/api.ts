import axios from "axios";
import { LOCALHOST } from "@/config/endpoint/endpoint";

export const api = axios.create({
  baseURL: `${LOCALHOST}`,
  headers: {
    'Content-Type': 'application/json'
  },
});


api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token')

    if(token) config.headers['Authorization'] = `Bearer${token}`

    return config
},(error)=>{
    return Promise.reject(error)
})
