
import axios from 'axios'
const API = axios.create({
    baseURL:'http://127.0.0.1:8000/api/',
    timeout:2000,
    headers:{
        'content-type':'application/json',
    }
})

export default API