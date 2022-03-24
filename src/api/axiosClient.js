import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://192.168.88.210:8000/',
    headers: {
        'content-type': 'application/json',
    }
})
