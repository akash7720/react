import axios from "axios";



const myBackendUrl = process.env.BAKEND_MODE === 'development'

?"http://localhost:8000/api/v1"

  :process.env.BAKEND_MODE === 'staging' ?"http://localhost:8000/api/v1"

         :"http://localhost:8000/api/v1"

const api = axios.create({baseURL: myBackendUrl })

export default api;