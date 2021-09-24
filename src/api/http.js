/* eslint-disable dot-notation */
import axios from 'axios'

const localAxios = axios.create()

// Add a request interceptor
localAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    const tokenType = localStorage.getItem('token_type')
    if (token && tokenType) {
      config.headers.Authorization = `${tokenType} ${token}`
    } else {
      config.headers.Authorization = null
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default localAxios
