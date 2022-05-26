import axios from 'axios'; 

const BASE_URL = 'https://app-store-1906.herokuapp.com/api/'; 

export const publicRequest = axios.create({
    baseURL:BASE_URL
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{}
})